import axios from 'axios'
const baseUrl = "http://localhost:3001/notes";

//to get 
export const getNotes = () =>
  //query fnc lae j func pass garyyou, tyo func le return gareko data, notes key mw haldinw ne rahexa
  axios.get(baseUrl).then((res) => {
    return res.data;
  });

  //to post 
  export const createNote =(newNote) => { 
  return axios.post(baseUrl, newNote).then((res) =>  res.data)
  }

export const updateNote =(updatedNote) => { 
   return axios
    .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    .then((res) => res.data);
}