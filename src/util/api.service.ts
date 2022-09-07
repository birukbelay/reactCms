import JwtService from "./jwt.service";
import axios, { AxiosRequestConfig } from "axios";
import { API_ROOT } from "./constants";

export const axiosClient = axios.create({
    baseURL: API_ROOT
});

const ApiService = {
    setHeader() {
        // @ts-ignore
        axiosClient.defaults.headers["Authorization"] = `Bearer ${JwtService.getToken()}`;
    },

    query(resource: string, params: AxiosRequestConfig | undefined) {
        return axiosClient.get(resource, params).catch((error) => {
            // throw new Error(error);
            throw new Error(`[NETWORK]  ${error} Please try again`);
        });
    },

    get(path:string, slug = "", params: AxiosRequestConfig | undefined) {
        return axiosClient.get(slug ? `${path}/${slug}` :`${path}`, params).catch((error) => {

            throw new Error(`[NETWORK] Service ${error} Please try again`);
        });
    },

    post(path:string, params?: any) {
        return axiosClient.post(`${path}`, params).catch((error) => {

            throw new Error(`[NETWORK]  ${error} Please try again`);
        });
    },

    update(path:string, slug:string, params: any) {
        return axiosClient.patch(`${path}/${slug}`, params).catch((error) => {
            throw new Error(`[NETWORK]  ${error} Please try again`);
        });
    },

    put(resource: string, params: any) {
        return axiosClient.put(`${resource}`, params).catch((error) => {
            throw new Error(`[NETWORK] Service ${error} Please try again`);
        });
    },

    delete(resource: string, id: any) {
        return axiosClient.delete(`${resource}/${id}`).catch((error) => {
            throw new Error(`[NETWORK] Service ${error} Please try again`);
        });
    }
};

export default ApiService;
