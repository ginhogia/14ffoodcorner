import { useState } from "react";
import './ProductGalary.css';


export const ProductGalary = function({orderBy, products}){

const orderProducts = products.sort(
    (a,b) => a.fields[orderBy] > b.fields[orderBy] ? 1: -1
);
const productItems = orderProducts.map(product =>
    <div key={product.id} className="product">
    <h1>{product.fields.Name}</h1>
    <p>{product.fields.Taste}</p>
    <img src={product.fields.ImgUrl} style={{width:'90%'}} alt=" " />
    <p>{product.fields.Type}</p>
    <p>{product.fields.Price}</p>
</div>
    );
    return(
        <>
            <p>Sort by: {orderBy}</p>
            <div className="product-container">
                
                    {productItems}
                
            </div>
        </>
    );
}