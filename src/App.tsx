import React from 'react';
import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import ProductCard from "./pages/ProductCard";
import Basket from "./pages/Basket";
import { ItemTypes } from './components/ItemTypes';


const App = (props: {data: ItemTypes[]}) => {
  return (
    <div>
        <Routes>
          <Route index element={<Catalog data={props.data}/>}></Route>
          <Route path="/" element={<Catalog data={props.data}/>}></Route>
          <Route path="/:id" element={<ProductCard data={props.data}/>}></Route>
          <Route path="catalog/:id" element={<ProductCard data={props.data}/>}></Route>
          <Route path="catalog" element={<Catalog data={props.data}/>}></Route>
          <Route path="basket" element={<Basket />}></Route>
        </Routes>
    </div>

  )
}

export default App