import axios from 'axios'


const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => { 
    const response = await axios.get(baseUrl);
    // console.log(response.data);
    return response.data;
};

const createNew = async(newContent) => { 
    //yade content mw kehe content aayo vane , first convert it into object
    // const object = { content, important: false} //for now newContent direct pathau xa 
    const response = await axios.post(baseUrl, newContent) //look post garne re jatha
    return response.data;
}


export default { getAll, createNew };