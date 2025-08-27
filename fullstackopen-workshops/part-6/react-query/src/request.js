import axios from "react";

export const getNotes = () =>
  //query fnc lae j func pass garyyou, tyo func le return gareko data, notes key mw haldinw ne rahexa
  axios.get("http://localhost:3001/notes").then((res) => {
    return res.data;
  });
