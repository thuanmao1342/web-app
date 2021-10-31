import * as React from 'react';
import CategoryApi from '../../api/CategoryApi';

export default function Category(
  params,
  setParams,
) {
  const initCategoryValues = [];
  const [ category, setCategory] = React.useState(initCategoryValues);
  React.useEffect(() => {
    const fetchListCategory = async () =>{
      try{
        const response = await CategoryApi.getAll();
        setCategory(response);
      }catch (error){
        console.log(error);
      }
    }
  fetchListCategory();
  }, []);
  return (
    <ul>
      {category.map((item => (
        <li key={item.id}>{item.name}</li>
      )))}
    </ul>
  );
}
