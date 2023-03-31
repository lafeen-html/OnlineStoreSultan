import React, { useState } from 'react';
import '../styles/Item.css';
import { Link } from "react-router-dom";
import { ItemTypes } from './ItemTypes';

const Item = ({
	id = "", image_url = "", product_name = "", size = "", size_type = "",
	brand = "", description = "", barcode = "", manufacturer = "", price = ""
}) => {
	let bottle = <img src='http://localhost:3000/bottle.svg' />
	let box = <img src='http://localhost:3000/box-open.svg' />
	const itemImg = size_type == "мл" ? bottle : box;


	const [inCart, setInCart] = useState(false);
	const [count, setCount] = useState(1);

	function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
		const target = e.target as HTMLButtonElement
		if (target && target.textContent) {
			setInCart(!inCart)
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
					parsedArr.push({ id, image_url, size, size_type, barcode, brand, description, price, count: 1 });
					alert('Товар добавлен в корзину!')
				}
			} else {
				parsedArr.push({ id, image_url, size, size_type, barcode, brand, description, price, count: 1 })
				alert('Товар добавлен в корзину!')
			}

			const stringifiedArr = JSON.stringify(parsedArr)
			localStorage.setItem("basket", stringifiedArr)
		}
	}


	


	return (
		<div className="item">
			<img className="image_url" src={image_url} alt="{brand}" />
			<div className="item-info">
				<h6 className="item-size"><span>{itemImg} </span>{size} <span>{size_type}</span></h6>
				
				<Link to={`${id}`}>
					<h3 className="item-name"><span className="item-span">{product_name} </span> {description}</h3>
				</Link>
				<h5 className="item-manufacturer">Штрихкод: <span className="item-span">{barcode}</span></h5>
				<h5 className="item-barcode">Производитель: <span className="item-span">{manufacturer}</span></h5>
				<h5 className="item-brand">Бренд: <span className="item-span">{brand}</span></h5>
			</div>
			<div className="purchase">
				<h3 className="purchase-price">{price} ₸</h3>
				<div className="purchase-button">
					<button className="button-item" onClick={handleAddToCart}>В корзину</button>
					<img className="purshase-basket" src='http://localhost:3000/purshase-basket.svg' alt="" />
				</div>
			</div>
		</div>
	)
}

export default Item;