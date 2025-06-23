
const History =({history}) =>{
    if (history.length > 0){
        return <h5> Click history is :{history.join(" ")}</h5>
    } 
    
    return <p>No history Yet</p>;
    
}

export default History;