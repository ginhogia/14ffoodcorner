import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductGalary } from './components/ProductGalary'

function App() {
  const products = [
    {
        "id": "rec1FU4JK3sYN7yOi",
        "createdTime": "2023-07-13T00:39:52.000Z",
        "fields": {
            "Name": "ORION 預感非油炸香烤洋芋片",
            "Type": "零食",
            "Price": 10,
            "Status": "供應中",
            "ImgUrl": "https://upic-bucket.s3.us-west-2.amazonaws.com/uPic/0MTh3h.png",
            "Taste": "洋蔥口味 (小包)"
        }
    },
    {
        "id": "rec449Sm8YtrrJva1",
        "createdTime": "2023-07-19T07:33:17.000Z",
        "fields": {
            "Name": "舒味思氣泡水",
            "Type": "飲料",
            "Price": 21,
            "Status": "供應中",
            "ImgUrl": "https://online.carrefour.com.tw/on/demandware.static/-/Sites-carrefour-tw-m-inner/default/dw65426137/images/large/1004103300104.jpg",
            "Taste": "萊姆口味",
            "Memo": "Webb 7/19 24瓶"
        }
    },
    {
        "id": "rec4EWXUhgC0oYWZD",
        "createdTime": "2023-07-13T09:48:06.000Z",
        "fields": {
            "Name": "維大力零熱量汽水",
            "Type": "飲料",
            "Price": 14,
            "Status": "供應中",
            "ImgUrl": "https://upic-bucket.s3.us-west-2.amazonaws.com/uPic/1VJvEg.png"
        }
    },
    {
        "id": "recKLMuguWFOaVOqK",
        "createdTime": "2023-07-13T00:39:52.000Z",
        "fields": {
            "Name": "樂天小熊餅乾",
            "Type": "零食",
            "Price": 23,
            "Status": "供應中",
            "ImgUrl": "https://upic-bucket.s3.us-west-2.amazonaws.com/uPic/1iJXKD.jpg",
            "Taste": "濃黑巧克力風味"
        }
    },
    {
        "id": "recMmLpmqTsSocu9X",
        "createdTime": "2023-07-24T13:31:55.000Z",
        "fields": {
            "Name": "海太 脆皮黑森林蛋糕",
            "Type": "零食",
            "Price": 10,
            "Status": "供應中",
            "ImgUrl": "https://online.carrefour.com.tw/on/demandware.static/-/Sites-carrefour-tw-m-inner/default/dwaad9efaf/images/large/1410415700101.jpg"
        }
    },
    {
        "id": "recc6Ex09CWnqHbit",
        "createdTime": "2023-07-13T09:55:45.000Z",
        "fields": {
            "Name": "來一客",
            "Type": "泡麵",
            "Price": 22,
            "Status": "供應中",
            "ImgUrl": "https://cs-b.ecimg.tw/items/DBAAAXA90055MR3/000001_1637030522.jpg",
            "Taste": "牛肉蔬菜"
        }
    },
    {
        "id": "reckNVnm2Qgq7gyLJ",
        "createdTime": "2023-07-13T00:39:52.000Z",
        "fields": {
            "Name": "日清 咚兵衛油豆腐烏龍麵",
            "Type": "泡麵",
            "Price": 45,
            "Status": "供應中",
            "ImgUrl": "https://upic-bucket.s3.us-west-2.amazonaws.com/uPic/G0c0mX.jpg"
        }
    },
    {
        "id": "reckUV7ca8Q5Eyija",
        "createdTime": "2023-07-13T09:49:46.000Z",
        "fields": {
            "Name": "來一客",
            "Type": "泡麵",
            "Price": 22,
            "Status": "供應中",
            "ImgUrl": "https://i3.momoshop.com.tw/1658329672/goodsimg/0003/565/193/3565193_R_m.webp",
            "Taste": "鮮蝦魚板"
        }
    }
];
//const [orderBy, setOrderBy] = useState("title");
  const orderBy = "Name";
  function sortList(term){
    
  }

  return (
    <>
      <h1 className="title">Junk Food Corner</h1>
      <h3>Please transfer money to Payton</h3>
      
      <div className="orders">
        <button onClick={sortList('Name')}>Title</button>
        <button onClick={sortList('Type')}>Type</button>
        <button onClick={sortList('Price')}>Price</button>
      </div>
      <ProductGalary orderBy= {orderBy} products={products}></ProductGalary>
    </>
  )
}

export default App
