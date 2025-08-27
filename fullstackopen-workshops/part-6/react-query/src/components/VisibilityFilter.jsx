import {  useDispatch, useSelector } from "react-redux";
import NoteForm from "./NoteForm";
// import Notes from "./components/Notes"
import Notes from "./Notes";
import { filterChange } from "../reducers/filterReducer";



const VisibilityFilter =() => { 
    const dispatch = useDispatch();
    const filterSelected =(filter) => { 
        console.log("clicked radio is", filter);
        // setFilter(filter);
        // use of dispatch ok 
        dispatch(filterChange(filter));
      }

    return ( 
        <div>
            all 
            <input 
                type="radio"
                name="filter"
                onChange={() => filterSelected("ALL")}
                checked={useSelector((state) => state.filter) === 'ALL'}
            />
            important
            <input 
                type="radio"
                name="filter"
                onChange={() => filterSelected('IMPORTANT')}
            />
            nonimportant
            <input 
                type="radio"
                name="filter"
                onChange={() => filterSelected('NONIMPORTANT')}
            
            />
        </div>
    );
}

export default VisibilityFilter;