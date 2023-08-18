import { useState } from "react";
import './ProductGalary.css';
import {Flipper, Flipped } from "react-flip-toolkit";


export const ProductGalary = function({orderBy, products}){

const orderProducts = products.sort(
    (a,b) => a.fields[orderBy] > b.fields[orderBy] ? 1: -1
);
const productItems = orderProducts.map(product =>
    <Flipped flipId={product.id} flipKey={product.id} spring="veryGentle">
    <div key={product.id} className="product">
        <h1>{product.fields.Name}</h1>
        <p>{product.fields.Taste}</p>
        <img src={product.fields.ImgUrl} style={{width:'90%'}} alt="product" />
        <p>{product.fields.Type}</p>
        <p>{product.fields.Price}</p>
    </div>
    </Flipped>
    );
    return(
        <>
            <p>Sort by: {orderBy}</p>
            <Flipper flipKey={orderBy}>
            <div className="product-container">
                {productItems}
            </div>
            </Flipper>
        </>
    );
}