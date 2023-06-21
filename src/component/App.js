import React ,{useEffect, useState}from "react";
import axios from "axios";
import GiftCard from "./giftCard.jsx"
import Search from "./search.js";



/* 
Gify makes a Trending Api call and passes it to the GiftCard Component*/
const Gify=()=>{
    //we want page to display trending gifs first
    const [gifyList,setGifyList]=useState({});  
    const [searchterm,setSearch]=useState();

    useEffect(()=>{
        async function fetchGify(){
            const gifyObj= await axios.get("https://api.giphy.com/v1/gifs/trending",
            {params:{
                api_key:"cY6cNxU0wJOnGL357mMN989xcnJkneTd",
                limit: 6
            }});
        setGifyList(gifyObj.data.data);
        }
        fetchGify();
    },[]);

    console.log("gifyList"+gifyList)

    //updates each time the searchTerm state updates
    useEffect(()=>{
        async function fetchGify(){
            const gifyObj= await axios.get("https://api.giphy.com/v1/gifs/search",
            {params:{api_key:"cY6cNxU0wJOnGL357mMN989xcnJkneTd",q: searchterm,limit:6}});
        setGifyList(gifyObj.data.data);
        }
        fetchGify();
    },[searchterm]);

    function handleSearchUpdate(value){
        setSearch(value);
    }

    
    
    return(
        <div>
            <Search onValueChange={handleSearchUpdate}></Search>
            {/* presents the gifyList Provided as a prop*/}
            <GiftCard gifyList={gifyList}></GiftCard>
        </div>
    )
}

export default Gify;

