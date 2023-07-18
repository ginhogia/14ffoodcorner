import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductGalary } from './components/ProductGalary'

function App() {
  const orderBy = ref('title')
  function sortList(term){
    orderBy.value = term;
  }

  return (
    <>
      <h1 class="title">Junk Food Corner</h1>
      <h3>Please transfer money to Payton</h3>
      <div class="orders">
        <button onClick={sortList('Name')}>Title</button>
        <button onClick={sortList('Type')}>Type</button>
        <button onClick={sortList('Price')}>Price</button>
      </div>
      <ProductGalary></ProductGalary>
    </>
  )
}

export default App
