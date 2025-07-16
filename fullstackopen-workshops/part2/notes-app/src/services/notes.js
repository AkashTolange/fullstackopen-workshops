import axios from "axios";

// const baseUrl = "http://localhost:3000/notes";
const baseUrl = "/api/notes";

const getAll =() =>{
    return axios.get(baseUrl);
}

const create = (note, token) =>{
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.post(baseUrl, note, config);
}

const update =(id, updatedNote) =>{
    // return axios.put(`${baseUrl}${id}`, updatedNote);
    //sound not coming 
    return axios.put(`${baseUrl}/${id}`, updatedNote);
}

export default { getAll, create , update};