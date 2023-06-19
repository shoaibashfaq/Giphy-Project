import React from "react";
/*This is the presentational component */
const GiftCard=(props)=>{

    return(
        <div>
            {Object.values(props.gifyList).map((item)=>{
                return <img src={item.images.original.url} alt="Nothing" />
            })}
        </div>
    )
}

export default GiftCard;