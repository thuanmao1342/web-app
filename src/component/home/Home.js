import * as React from 'react';
import { Grid } from '@mui/material';
import Category from './Category';
import Product from './Product';
import ProductApi from '../../api/ProductApi';

function Home() {
  const initValues = [];
  const initParams= {
    _limit : '9',
    _page : '0',
    _field : 'id',
    _known : 'up',
  };
  const [ params, setParams] = React.useState(initParams);
  const [ product, setProduct] = React.useState(initValues);

  React.useEffect(() => {
    const fetchListCategory = async () =>{
      try{
        const response = await ProductApi.getAll(params);
        setProduct(response);
        console.log(response);
      }catch (error){
        console.log(error);
      }
    }
  fetchListCategory();
  }, [params]);
  return (
      <Grid container>
        <Grid item xs={2}>
          <Category
            params = {params}
            setParam = {setParams}
          />
        </Grid>
        <Grid item xs={10}  style={{background:"red"}}>
          <Product
            params = {params}
            setParam = {setParams}
            product = {product}
            setProduct = {setProduct}
          />
        </Grid>
      </Grid>
  );
}
export default Home;