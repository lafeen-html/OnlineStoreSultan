import React, { useState, useEffect } from 'react';
import '../styles/ProductCard.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from "react-router-dom";
import { ItemTypes } from "../components/ItemTypes";


const ProductCard = (props: { data: ItemTypes[] }) => {
  const [itemCard, setItemCard] = useState(props.data);
  const params = useParams();

  let bottle = <img src='http://localhost:3000/bottle.svg' />
  let box = <img src='http://localhost:3000/box-open.svg' />
  const itemImg = itemCard[0].size_type == "мл" ? bottle : box;

  useEffect(() => {
    let id = Object.values(params).join("");
    let copyItemCard = [...itemCard];
    copyItemCard = copyItemCard.filter((el: { id: string | number }) => el.id == id);
    setItemCard(copyItemCard);
  }, [])

  const [amountItems, setAmountItems] = useState<number>(1);
  const handleIncreaseAmountItems = () => {
		setAmountItems(amountItems + 1)
	}
  
	const handleDecreaseAmountItems = () => {
		setAmountItems(amountItems - 1)
	}

  const [inBasket, setInBasket] = useState(false);
  const [count, setCount] = useState(1);
  function handleAddToBasket(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target && target.textContent) {
        setInBasket(!inBasket)
        const arr: any = localStorage.getItem("basket")
        const parsedArr: any[] = JSON.parse(arr ? arr : "[]")
        if (parsedArr.length) {
            let contains = false
            parsedArr.map((el: { id: any; count: number }) => {
                if (el.id == itemCard[0].id) {
                    el.count += 1
                    setCount(el.count)
                    contains = true
                }
            })
            if (!contains) {
                parsedArr.push(itemCard[0]);
                alert('Товар добавлен в корзину!');
            }
        } else {
            parsedArr.push(itemCard[0]);
            alert('Товар добавлен в корзину!');
        }
        const stringifiedArr = JSON.stringify(parsedArr);
        localStorage.setItem("basket", stringifiedArr);
    }
}




  return (
    <div>
      <Header />

      <div className="wrapper">

        <div className="catalog-header-info">
          <Link to="/catalog">Главная</Link>
          <Link to="/catalog"><span className="product-card-menu">Косметика и гигиена</span></Link>
          <span className="catalog-menu">Наименование товара</span>
        </div>


        <div className="product">

          <div className="product-image">
            <img className="product-image" src={itemCard[0].image_url} alt="item-img" />
          </div>

          <div className="product-info">
            <span className="in-stock">В наличии</span>

            <h1 className="product_name">
              <span>{itemCard[0].product_name} </span>
              <span className="product_description">{itemCard[0].description}</span>
            </h1>

            <h6 className="item-size"><span>{itemImg} </span>{itemCard[0].size} <span>{itemCard[0].size_type}</span></h6>

            <span className="product-item-price">{itemCard[0].price} ₸</span>

            <div className="price-selector">
              <button onClick={handleDecreaseAmountItems} disabled={amountItems <= 1} className="item-selector-start">-</button>
              <p> {amountItems} </p>
              <button onClick={handleIncreaseAmountItems} className="item-selector-end">+</button>
            </div>

            <div className="product-item-button">
              <button type="submit" onClick={handleAddToBasket} className="product-button-item">В корзину</button>
              <img className="purshase-basket" src='http://localhost:3000/purshase-basket.svg' alt="" />
            </div>

            <div className="product-card-info">
              <button className="item-button-share">
                <img className="share" src='http://localhost:3000/share.svg' alt="" />
              </button>
              <div className="product-item-info">
                <span>При покупке от <span style={{ fontWeight: 800 }}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</span>
              </div>
              <button className="item-price-list">
                Прайс-лист
                <img className="item-price-list-img" src='http://localhost:3000/item-price-list.svg' alt="" />
              </button>
            </div>

            <div className="item-main-info">
              <div>Производитель: <span>{itemCard[0].manufacturer}</span></div>
              <div>Бренд: <span>{itemCard[0].brand}</span></div>
              <div>Артикул: <span>{itemCard[0].id}</span></div>
              <div>Штрихкод: <span>{itemCard[0].barcode}</span></div>
            </div>

            <h2 className="description-item">Описание</h2>
            <div className="description-item-group">
              <span className="description-item-text">{itemCard[0].description}</span>
              <img className="doted-line" src='http://localhost:3000/doted-line.svg' alt="" />
            </div>

            <h2 className="description-item">Характеристики</h2>

            <div className="specifications">
              <div>Производитель: <span>{itemCard[0].manufacturer}</span></div>
              <div>Бренд: <span>{itemCard[0].brand}</span></div>
              <div>Артикул: <span>{itemCard[0].id}</span></div>
              <div>Штрихкод: <span>{itemCard[0].barcode}</span></div>
              <div>Тип ухода: <span>{itemCard[0].care_type.join(", ")}</span></div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default ProductCard;