import { useState } from "react";
import './ProductGalary.css';
import {Flipper, Flipped } from "react-flip-toolkit";


export const ProductGalary = function({orderBy, products, onCalculate}){

const orderProducts = products.sort(
    (a,b) => a.fields[orderBy] > b.fields[orderBy] ? 1: -1
);




const GenImageStyle = function(status){
    if (status === "缺貨"){
        return {
            filter: 'grayscale(1)'};
        }
    }

const ProductStatus = function(price,status){
    if (status === "缺貨"){
        return (<p>{status}</p>);
    }
    else{
        return (<p>${price}</p>);
    }
}

const cartIncrement = (item) => {
    onCalculate(item,1);
}

const productItems = orderProducts.map(product =>
    <Flipped flipId={product.id} spring="veryGentle">
    <div key={product.id} className="product" onClick={() => {cartIncrement(product)}}>
        <h1>{product.fields.Name}</h1>
        <div><p>{product.fields.Taste}</p></div>
        <div><img src={product.fields.ImgUrl} style={ GenImageStyle(product.fields.Status)} alt="no image" /></div>
        <div><p>{product.fields.Type}</p></div>
        <div>{ProductStatus(product.fields.Price,product.fields.Status)}</div>
        
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