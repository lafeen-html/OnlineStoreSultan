import React, { useState } from 'react';
import '../styles/Basket.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import ItemBasket from "../components/ItemBasket";


const Basket = () => {
  const basketJSON: any = JSON.parse(localStorage.getItem("basket") || "")
  const [basketItems, setCartItems] = useState(basketJSON);


  function clearBasket(e: React.MouseEvent<HTMLButtonElement>) {
    localStorage.setItem("basket", JSON.stringify([]),);
    alert("Ваш заказ оформлен!");
    window.location.reload();
  }


  return (
    <div>
      <Header />
      <div className="wrapper">

        <div className="catalog-header-info">
          <Link to="/catalog">Главная</Link>
          <span className="catalog-menu">Корзина</span>
        </div>


        <div className="basket-title">
          <h1 className="basket-title-text">Корзина</h1>
        </div>

        <div className="basket-list">
          {basketItems.map((arr: any, id: number) => {
            return (
              <ItemBasket
                key={id}
                id={arr.id}
                image_url={arr.image_url}
                product_name={arr.product_name}
                size={arr.size}
                size_type={arr.size_type}
                brand={arr.brand}
                description={arr.description}
                barcode={arr.barcode}
                manufacturer={arr.manufacturer}
                price={arr.price}
              />
            )
          })}
        </div>

        <img className="basket-doted-line" src='http://localhost:3000/basket-doted-line.svg' alt="" />
        <div className="basket-order">
          <button type="submit" onClick={clearBasket} className="basket-order-button">Оформить заказ</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Basket;