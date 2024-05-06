import React from "react"
import ICard from "../../interfaces/card"


const Card =  ({card}:{card:ICard})=>{
    return(
        <div style={{textAlign:'center', height:'5rem', padding:'1rem'}}>
            <div>

            <h1>
                {card.name}
            </h1>
            <h2>
                {card.description}
            </h2>
            </div>
        </div>
    )
}

export default Card