import React from "react";

function ItemListContainer({greeting}) {
    return(
        <div><span>Mensaje</span>
        <p>{greeting}</p>
        </div>               
    )
}

export default ItemListContainer;