import { useState } from "react";

export const ProductGalary = function({orderBy, products}){

const orderProducts = products.sort(
    (a,b) => a.fields[orderBy] > b.fields[orderBy] ? 1: -1
);

    return(
        <>
            <p>Sort by: {orderBy}</p>
            <div className="product-container">
                
            </div>
        </>
    );
}