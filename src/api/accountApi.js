import axiosClient from "./axiosClient";

const accountApi = {
    getAll : (params) => {
        const url = "/account/get";
        return axiosClient.get(url, { params });
    },
    getById : (id) => {
        const url = `/account/get/${id}`;
        return axiosClient.get(url);
    },
    createAccount : () => {
        const url = "/account/create";
        return axiosClient.post(url);
    },
    updateAccount : (params) => {
        const url = "/account/create/{}";
        return axiosClient.put(url, { params });
    },
    deleteAccount : (params) => {
        const url = "/account/create/{id}";
        return axiosClient.delete(url, { params });
    },
}
export default accountApi;