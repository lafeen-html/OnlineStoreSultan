import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <div>
      <div className="wrapper">

        <div className="header-top">

          <div className="header-contacts">

            <div className="adress">
              <img className="location-icon" src='http://localhost:3000/location-icon.svg' alt="" />
              <div className="adress-text">
                г. Кокчетав, ул. Ж. Ташенова 129Б
                <span>(Рынок Восточный)</span>
              </div>
            </div>

            <div className="email">
              <img className="mail-icon" src='http://localhost:3000/mail-icon.svg' alt="" />
              <div className="email-text">
                opt.sultan@mail.ru
                <span>На связи в любое время</span>
              </div>
            </div>

          </div>

          <nav className="navigation">
            <ul>
              <li><a href=''>O компании</a></li>
              <li><a href=''>Доставка и оплата</a></li>
              <li><a href=''>Возврат</a></li>
              <li><a href=''>Контакты</a></li>
            </ul>
          </nav>

        </div>


        <div className="header-bottom">

          <div className="logo-sultan">
            <img className="sultan-icon" src='http://localhost:3000/sultan-logo-header.svg' alt="" />
          </div>

          <Link to="/catalog">
          <button className="catalog">
            Каталог
            <img className="catalog-icon" src='http://localhost:3000/catalog-frame.svg' alt="" />
          </button>
          </Link>

          <div className="search">
            <input className="input-search" placeholder="Поиск..." />
            <button className="search">
              <img className="search-icon" src='http://localhost:3000/search-icon.svg' alt="" />
            </button>
          </div>

          <div className="contacts">
            <span className="tel">+7 (777) 490-00-91</span>
            <span className="work-time">время работы: 9:00-20:00</span>
            <a className="order-call" href=''>Заказать звонок</a>
          </div>

          <img className="contacts-icon" src='http://localhost:3000/contacts-girl.svg' alt="" />

          <button className="price-list">
            Прайс-лист
            <img className="price-list-icon" src='http://localhost:3000/price-list-icon.svg' alt="" />
          </button>

          <div className="header-basket">
            <Link to="/basket" className="header-basket-main">
              <img className="header-basket-icon" src='http://localhost:3000/basket-icon.svg' alt="basket" />
              <div className="header-basket-info">
                <div className="header-basket-name">Корзина</div>
                <div className="header-basket-price">0 ₸</div>
              </div>
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Header;