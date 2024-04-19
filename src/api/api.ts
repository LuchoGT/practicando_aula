import axios from "axios";

const api = axios.create({
    baseURL: "https://auth-api-mocha.vercel.app",
})    

api.interceptors.request.use(config =>{

    config.headers={
        ...config.headers,
        'x-token': localStorage.getItem("token"),
    }
    return config;
})
export default api;