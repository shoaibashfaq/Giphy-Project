import React, {useState,useEffect} from "react";
import axios from "axios";
import Gify from "./App"

const Search=({onValueChange})=>{
   const[searchTerm,updateSearchTerm]= useState("");

   function updateSearch(event){
     event.preventDefault();
     //passes the search term to the function we took in as a prop
     onValueChange(searchTerm);
   }

   function updateState(event){
    //as the user types in their search ter,, the state is being updated
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