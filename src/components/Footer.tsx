import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>

      <div className="footer-all">
        <div className="footer-main">
          <img className="sultan-logo-footer" src='http://localhost:3000/sultan-logo-footer.svg' alt="" />
          <div className="footer-main-info">
            <span>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</span>
            <span className="footer-sales">Подпишись на скидки и акции</span>
            <input className="input-search" placeholder="Введите ваш E-mail" />
            <button className="footer-search">
              <img className="search-icon-footer" src='http://localhost:3000/search-icon-arrow.svg' alt="" />
            </button>
          </div>

        </div>

        <div className="footer-menu">
          <ul className='footer-list'><span className='footer-list-header'>Меню сайта:</span>
            <li><a href=''>O компании</a></li>
            <li><a href=''>Доставка и оплата</a></li>
            <li><a href=''>Возврат</a></li>
            <li><a href=''>Контакты</a></li>
          </ul>

        </div>

        <div className="footer-categories">
          <ul className='footer-list'><span className='footer-list-header'>Категории:</span>
            <li><a href=''>Бытовая химия</a></li>
            <li><a href=''>Косметика и гигиена</a></li>
            <li><a href=''>Товары для дома</a></li>
            <li><a href=''>Товары для детей и мам</a></li>
            <li><a href=''>Посуда</a></li>
          </ul>

        </div>

        <div className="footer-price-list">
          <span className='footer-list-header'>Скачать прайс-лист:</span>
          <div className="footer-button">
            <button className="price-list">
              Прайс-лист
              <img className="price-list-icon" src='http://localhost:3000/price-list-icon.svg' alt="" />
            </button>
          </div>
          <div className="footer-link-info">
            <span className='footer-links'>Связь в мессенджерах:</span>
            <div className="link-images">
              <img className="whatsapp-icon" src='http://localhost:3000/whatsapp-icon.svg' alt="" />
              <img className="telegram-icon" src='http://localhost:3000/telegram-icon.svg' alt="" />
            </div>
          </div>
        </div>

        <div className="footer-contacts">
          <span className='footer-list-header'>Контакты:</span>
          <div className="contacts-info">
            <span className="tel">+7 (777) 490-00-91</span>
            <span className="work-time">время работы: 9:00-20:00</span>
            <a className="order-call" href=''>Заказать звонок</a>
          </div>
          <div className="email-text">
            opt.sultan@mail.ru
            <span className="email-link">На связи в любое время</span>
          </div>
          <div className="link-images">
              <img className="Visa-logo" src='http://localhost:3000/Visa-logo.svg' alt="" />
              <img className="MasterCard-logo" src='http://localhost:3000/MasterCard-logo.svg' alt="" />
            </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;