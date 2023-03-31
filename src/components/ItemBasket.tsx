import React, { useState } from 'react';
import '../styles/ItemBasket.css';
import { Link } from "react-router-dom";


const ItemBasket = ({
    id = "", image_url = "", product_name="", size = "", size_type = "",
    brand = "", description = "", barcode = "",  manufacturer="", price = ""
}) => {
    let bottle = <img src='http://localhost:3000/bottle.svg' />
    let box = <img src='http://localhost:3000/box-open.svg' />
    const itemImg = size_type == "мл" ? bottle : box;


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
                    if (el.id == id) {
                        el.count += 1
                        setCount(el.count)
                        contains = true
                    }
                })
                if (!contains) {
                    parsedArr.push({id, image_url, size, size_type, barcode, brand, description, price, count: 1 })
                }
            } else {
                parsedArr.push({id, image_url, size, size_type, barcode, brand, description, price, count: 1 })
            }
            const stringifiedArr = JSON.stringify(parsedArr);
            localStorage.setItem("basket", stringifiedArr);
        }
    }


    const [amountItems, setAmountItems] = useState<number>(1);
    const handleIncreaseAmountItems = () => {
        setAmountItems(amountItems + 1);
    }

    const handleDecreaseAmountItems = () => {
        setAmountItems(amountItems - 1);
    }


    function removeItemFromBasket(e: React.MouseEvent<HTMLButtonElement>) {
        let id = e.currentTarget.getAttribute('value');
        const arr: any = localStorage.getItem("basket")
        let parsedArr: any[] = JSON.parse(arr ? arr : "[]")
        
        localStorage.setItem(
            "basket",
            JSON.stringify(parsedArr.filter(el => el.id !== Number(id))),
        );
        window.location.reload();
    }





    return (
        <div>
            <img className="basket-doted-line" src='http://localhost:3000/basket-doted-line.svg' alt="" />
            <div className="basket-item">

                <img className="basket-image_url" src={image_url} alt="{brand}" />
                <div className="basket-item-main">
                    <div className="basket-info">
                        <h6 className="basket-item-size"><span>{itemImg} </span>{size} <span>{size_type}</span></h6>


                        <div className="basket-info-text">
                            <Link to={`/`}>
                                <h2 className="basket-item-name"><span className="item-span">{brand} </span> {description}</h2>
                            </Link>
                            <h5 className="basket-item-description">{description}</h5>
                        </div>



                    </div>
                    <div className="basket-item-purchase">
                        <img className="doted-line-basket" src='http://localhost:3000/doted-line-basket.svg' alt="" />
                        <div className="basket-price-selector">
                            <button onClick={handleDecreaseAmountItems} disabled={amountItems <= 1} className="basket-item-selector-start">-</button>
                            <p> {amountItems} </p>
                            <button onClick={handleIncreaseAmountItems} className="basket-item-selector-end">+</button>
                        </div>
                        <img className="doted-line-basket" src='http://localhost:3000/doted-line-basket.svg' alt="" />
                        <h3 className="basket-item-purchase-price">{price} ₸</h3>
                        <img className="doted-line-basket" src='http://localhost:3000/doted-line-basket.svg' alt="" />
                        <div>
                            <button type="submit" onClick={removeItemFromBasket} value={id} className="basket-delete-button"><img className="basket-item catalog-delete-icon" src='http://localhost:3000/trash-button.svg' alt="" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default ItemBasket;