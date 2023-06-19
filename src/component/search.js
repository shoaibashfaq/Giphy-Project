import React, {useState,useEffect} from "react";
import axios from "axios";
import Gify from "./App"
const Search=({onValueChange})=>{
    //The use state function returns an Array of two elements. (the state and previous state). 
    //you can only pass in a single value that is the initial value of the state variable
    // const [gifyList,setGifyList]=useState({
    //     search:"funny",
    //     list:{}
    // });

    // function updateSearch(event){
        
    // }
   const[searchTerm,updateSearchTerm]= useState("");

   function updateSearch(event){
     event.preventDefault();
     onValueChange(searchTerm);
   }

   function updateState(event){
     updateSearchTerm(event.target.value);
     }
    
   return(
     <form onSubmit={updateSearch}>
          <input type="text" placeholder="Search" onChange={updateState} />
          <button type="submit"> GO</button>    
     </form>
   );
}

export default Search;