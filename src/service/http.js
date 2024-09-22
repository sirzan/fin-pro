import axios from "axios";


export const url='http://127.0.0.1:5000/'

export const http = axios.create({
  baseURL: url,
});


http.defaults.headers.get["Content-Type"] = "application/json";
http.defaults.headers.get["X-Requested-With"] = "XMLHttpRequest";
http.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
http.defaults.headers.post["Content-Type"] = "application/json";





