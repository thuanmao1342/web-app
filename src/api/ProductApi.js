import axiosClient from "./axiosClient";

const ProductApi = {
    getAll : (params) => {
        const url = "/product/get";
        return axiosClient.get(url, { params });
    },
    getById : (id) => {
        const url = `/product/get/${id}`;
        return axiosClient.get(url);
    },
    getByCategoryId : (id, params) => {
        const url = `/product/getbycategory/${id}`;
        return axiosClient.get(url, { params });
    },
    create : () => {
        const url = "/product/create";
        return axiosClient.post(url);
    },
    update : (params) => {
        const url = "/product/update/{id}";
        return axiosClient.delete(url, { params });
    },
}
export default ProductApi;