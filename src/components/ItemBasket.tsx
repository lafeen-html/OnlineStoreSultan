import React, { useState } from 'react';
import '../styles/ItemBasket.css';
import { Link } from "react-router-dom";
import bottle from './/../images/bottle.svg';
import boxOpen from './/../images/box-open.svg';
import basketDotedLine from './/../images/basket-doted-line.svg';
import dotedLineBasket from './/../images/doted-line-basket.svg';
import trashButton from './/../images/trash-button.svg';


const ItemBasket = ({
    id = "", image_url = "", product_name = "", size = "", size_type = "",
    brand = "", description = "", barcode = "", manufacturer = "", price = ""
}) => {
    const itemImg = size_type == "мл" ? bottle : boxOpen;
    const [inBasket, setInBasket] = useState(false);
    const [count, setCount] = useState(1);
    const [amountItems, setAmountItems] = useState<number>(1);
    const handleIncreaseAmountItems = () => { setAmountItems(amountItems + 1) }
    const handleDecreaseAmountItems = () => { setAmountItems(amountItems - 1) }

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
                    parsedArr.push({ id, image_url, size, size_type, barcode, brand, description, price, count: 1 })
                }
            } else {
                parsedArr.push({ id, image_url, size, size_type, barcode, brand, description, price, count: 1 })
            }
            const stringifiedArr = JSON.stringify(parsedArr);
            localStorage.setItem("basket", stringifiedArr);
        }
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
            <img className="basket-doted-line" src={basketDotedLine} alt="" />
            <div className="basket-item">
                <img className="basket-image_url" src={image_url} alt="{brand}" />
                <div className="basket-item-main">
                    <div className="basket-info">
                        <h6 className="basket-item-size"><img className="basket-item-sizeimg" src={itemImg} />{size} <span>{size_type}</span></h6>
                        <div className="basket-info-text">
                            <Link to={`/`}>
                                <h2 className="basket-item-name"><span className="item-span">{brand} </span> {description}</h2>
                            </Link>
                            <h5 className="basket-item-description">{description}</h5>
                        </div>
                    </div>
                    <div className="basket-item-purchase">
                        <img className="doted-line-basket" src={dotedLineBasket} alt="" />
                        <div className="basket-price-selector">
                            <button onClick={handleDecreaseAmountItems} disabled={amountItems <= 1} className="basket-item-selector-start">-</button>
                            <p> {amountItems} </p>
                            <button onClick={handleIncreaseAmountItems} className="basket-item-selector-end">+</button>
                        </div>
                        <img className="doted-line-basket" src={dotedLineBasket} alt="" />
                        <h3 className="basket-item-purchase-price">{price} ₸</h3>
                        <img className="doted-line-basket" src={dotedLineBasket} alt="" />
                        <div>
                            <button type="submit" onClick={removeItemFromBasket} value={id} className="basket-delete-button">
                                <img className="basket-item catalog-delete-icon" src={trashButton} alt="" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default ItemBasket;