import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import contactsGirl from './/../images/contacts-girl.svg';
import locationIcon from './/../images/location-icon.svg';
import mailIcon from './/../images/mail-icon.svg';
import sultanLogoHeader from './/../images/sultan-logo-header.svg';
import catalogFrame from './/../images/catalog-frame.svg';
import searchIcon from './/../images/search-icon.svg';
import priceListIcon from './/../images/price-list-icon.svg';
import basketIcon from './/../images/basket-icon.svg';


const Header = () => {

  return (
    <div>
      <div className="wrapper">

        <div className="header-top">

          <div className="header-contacts">

            <div className="adress">
              <img className="location-icon" src={locationIcon} alt="" />
              <div className="adress-text">
                г. Кокчетав, ул. Ж. Ташенова 129Б
                <span>(Рынок Восточный)</span>
              </div>
            </div>

            <div className="email">
              <img className="mail-icon" src={mailIcon} alt="" />
              <div className="email-text">
                opt.sultan@mail.ru
                <span>На связи в любое время</span>
              </div>
            </div>

          </div>

          <nav className="navigation">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <ul className="nav menu__box">
                <li><a className="menu__item">O компании</a></li>
                <li><a className="menu__item">Доставка и оплата</a></li>
                <li><a className="menu__item">Возврат</a></li>
                <li><a className="menu__item">Контакты</a></li>
              </ul>
            </div>
          </nav>


        </div>

        <div className="header-bottom">

          <div className="logo-sultan">
            <img className="sultan-icon" src={sultanLogoHeader} alt="" />
          </div>

          <Link to="/catalog">
            <button className="catalog">
              Каталог
              <img className="catalog-icon" src={catalogFrame} alt="" />
            </button>
          </Link>

          <div className="search">
            <input className="input-search" placeholder="Поиск..." />
            <button className="search">
              <img className="search-icon" src={searchIcon} alt="" />
            </button>
          </div>

          <div className="contacts">
            <span className="tel">+7 (777) 490-00-91</span>
            <span className="work-time">время работы: 9:00-20:00</span>
            <a className="order-call" href=''>Заказать звонок</a>
          </div>

          <img className="contacts-icon" src={contactsGirl} alt="" />

          <button className="price-list">
            Прайс-лист
            <img className="price-list-icon" src={priceListIcon} alt="" />
          </button>

          <div className="header-basket">
            <Link to="/basket" className="header-basket-main">
              <img className="header-basket-icon" src={basketIcon} alt="basket" />
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