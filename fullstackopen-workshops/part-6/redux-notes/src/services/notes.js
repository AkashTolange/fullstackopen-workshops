import axios from 'axios'


const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => { 
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data;
};

export default { getAll };