import axios from "axios";

// const baseUrl = "http://localhost:3000/notes";
const baseUrl = "/api/login";

// const getAll =() =>{
//     return axios.get(baseUrl);
// }
const login = async(user) =>{
    let loggedinUser = await  axios.post(baseUrl, user);
    return loggedinUser.data;
}

// const create = (note) =>{
//     return axios.post(baseUrl, note).then((result) => result.data);
// }

// const update =(id, updatedNote) =>{
//     // return axios.put(`${baseUrl}${id}`, updatedNote);
//     //sound not coming 
//     return axios.put(`${baseUrl}/${id}`, updatedNote);
// }

export default { login };