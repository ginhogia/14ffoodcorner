import { useEffect, useState } from 'react'
import './App.css'
import { ProductGalary } from './components/ProductGalary'

function App() {
  
const [products, setProducts] = useState([]);
const key='patxSqkSlFgpoyeFw.d364bf30fa67683fbb6b9fe892c56948f9b7f0b6ae8959a9a30bedf7eafeb5f8';
const baseId = 'appY7GVfIzY0KpUhT';
const table = 'tbl9JVGGQhWWTEgag';
const filterByFormula = 'Status!="下架"';
useEffect(()=>{
    fetch(`https://api.airtable.com/v0/${baseId}/${table}?filterByFormula=${filterByFormula}`,
        {
          headers: {
            Authorization: `Bearer ${key}`
          }
        })
      .then(response => response.json())
      .then(data => setProducts(data.records));
},[]);

const [orderBy, setOrderBy] = useState("Name");



  return (
    <>
      <h1 className="title">Junk Food Corner</h1>
      <h3>Please transfer money to Payton</h3>
      
      <div className="orders">
        <button onClick={()=>{setOrderBy('Name')}}>Title</button>
        <button onClick={()=>{setOrderBy('Type')}}>Type</button>
        <button onClick={()=>{setOrderBy('Price')}}>Price</button>
      </div>
      <ProductGalary orderBy= {orderBy} products={products}></ProductGalary>
    </>
  )
}

export default App
