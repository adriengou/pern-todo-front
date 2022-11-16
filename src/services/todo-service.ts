import axios from "axios";
import {API_URL} from "../environment";


const todo = {
    getAll: () => axios.get(`${API_URL}/`),
    create: (description:string) => axios.post(`${API_URL}/`, {description}),
    update: (id:number, description:string) => axios.put(`${API_URL}/${id}`, {description}),
    delete: (id:number) => axios.delete(`${API_URL}/${id}`),
}

export default todo