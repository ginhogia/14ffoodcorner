import { useEffect, useState } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import './App.css'
import { ProductGalary } from './components/ProductGalary'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { ShoppingCart } from './components/ShoppingCart'


function App() {

const [onLoading, setLoadingStatus]= useState(true);
const [products, setProducts] = useState([]);
const [orderBy, setOrderBy] = useState("Name");

const [shopCart, setCartItem] = useState([]);
const addToCart = (item, quanty) => {
  setCartItem(prevCart => {
    const newCart = [...prevCart];
    let targetIndex = newCart.findIndex(e => e.id === item.id);
    
    if (targetIndex >= 0) {
      newCart[targetIndex] = {
        ...newCart[targetIndex],
        count: newCart[targetIndex].count + quanty
      };
    } else {
      newCart.push({
        'id': item.id,
        'product': item,
        'count': quanty
      });
    }
    
    return newCart;
  });
}

useEffect(()=>{
  //load data
    setLoadingStatus(true);
      const firebaseConfig = {
        apiKey: "AIzaSyAmskkd6FA-KzhFATIYCUgZ4smLOqkqA5c",
        authDomain: "fcorner-4cfac.firebaseapp.com",
        projectId: "fcorner-4cfac",
        storageBucket: "fcorner-4cfac.appspot.com",
        messagingSenderId: "206220235360",
        appId: "1:206220235360:web:692ba41161d20a5d16e905",
        measurementId: "G-5KG0KG0VGX"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
        const colRef = collection(db, "products");
        const querySnapshot = query(colRef, where("fields.Status", 'not-in', ["下架"]));
        const docSnap =getDocs(querySnapshot)
        .then(response=>{
          let tempArr =[];
          response.forEach((doc) =>{
            tempArr.push(doc.data());
          });
          setProducts(tempArr);
        })
        .then(setLoadingStatus(false));
},[]);



  return (
    <>
      <h1 className="title">Junk Food Corner</h1>
      <h3>Please transfer money to Payton</h3>
      
      <div className="orders">
        <button onClick={()=>{setOrderBy('Name')}}>Title</button>
        <button onClick={()=>{setOrderBy('Type')}}>Type</button>
        <button onClick={()=>{setOrderBy('Price')}}>Price</button>
      </div>
      
      <ProductGalary orderBy={orderBy} products={products} onCalculate={addToCart}></ProductGalary>
      <ShoppingCart cart={shopCart} updateCart={setCartItem} />
      <MagnifyingGlass visible={onLoading} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperStyle={{}} wrapperClass="MagnifyingGlass-wrapper" glassColor = '#c0efff' color = '#e15b64' /> 
        
    </>
      
  )
}

export default App
