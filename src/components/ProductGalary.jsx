import { useState } from "react";
import './ProductGalary.css';
import {Flipper, Flipped } from "react-flip-toolkit";


export const ProductGalary = function({orderBy, products}){

const orderProducts = products.sort(
    (a,b) => a.fields[orderBy] > b.fields[orderBy] ? 1: -1
);




const GenImageStyle = function(status){
    if (status === "缺貨"){
        return {
            filter: 'grayscale(1)',
            width:'90%'};
        }
    else{
        return {width:'90%'};
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


const productItems = orderProducts.map(product =>
    <Flipped flipId={product.id} spring="veryGentle">
    <div key={product.id} className="product">
        <h1>{product.fields.Name}</h1>
        <p>{product.fields.Taste}</p>
        <img src={product.fields.ImgUrl} style={ GenImageStyle(product.fields.Status)} alt="no image" />
        <p>{product.fields.Type}</p>
        {ProductStatus(product.fields.Price,product.fields.Status)}
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