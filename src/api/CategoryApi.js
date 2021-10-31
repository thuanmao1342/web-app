import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll : () => {
        const url = "/category/get";
        return axiosClient.get(url);
    }
}
export default CategoryApi;