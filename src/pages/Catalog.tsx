import React, { useEffect, useState } from 'react';
import '../styles/Catalog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ItemTypes } from "../components/ItemTypes";
import Item from "../components/Item";
import Paginator from '../components/Paginator';
import searchIcon from './/../images/search-icon.svg';
import trashButton from './/../images/trash-button.svg';
import { sortProducts, manufacturersArray, careTypesArray } from '../components/ExportData';


const Catalog = (props: { data: ItemTypes[] }) => {
  const [items, setItems] = useState(props.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  /* Сортировка */
  function nameAsc(arr: ItemTypes[]) {
    let itmArr = [...arr];
    itmArr.sort((a, b) => a.product_name > b.product_name ? 1 : -1);
    setItems(itmArr);
  }

  function nameDesc(arr: ItemTypes[]) {
    let itmArr = [...arr];
    itmArr.sort((a, b) => a.product_name < b.product_name ? 1 : -1);
    setItems(itmArr);
  }

  function priceAsc(arr: ItemTypes[]) {
    let itmArr = [...arr];
    itmArr.sort((a, b) => a.price > b.price ? 1 : -1);
    setItems(itmArr);
  }

  function priceDesc(arr: ItemTypes[]) {
    let itmArr = [...arr];
    itmArr.sort((a, b) => a.price < b.price ? 1 : -1);
    setItems(itmArr);
  }

  function handleSortClick(event: React.MouseEvent<HTMLSelectElement, MouseEvent>) {
    event.preventDefault();
    const target = event.target as HTMLSelectElement;
    if (target.value === "nameAsc") {
      return nameAsc(items);
    }
    if (target.value === "nameDesc") {
      return nameDesc(items);
    }
    if (target.value === "priceAsc") {
      return priceAsc(items);
    }
    if (target.value === "priceDesc") {
      return priceDesc(items);
    }
    setCurrentPage(1);
  }

  useEffect(() => { setItems(props.data) }, []);

  /* Цена */
  function filterArrayByPrice(arr: ItemTypes[], numA: number | null, numB: number | null) {
    let copyArr = [...arr];
    if (numA && numB) {
      return copyArr.filter((el) => el.price >= numA && el.price <= numB);
    }
    if (numA) {
      return copyArr.filter((el) => el.price >= numA);
    }
    if (numB) {
      return copyArr.filter((el) => el.price <= numB);
    }
    setItems(copyArr);
    return copyArr;
  }

  /* Поиск по производителю */
  const [text, setText] = useState('');
  const findItems = [...items].filter(i => i.manufacturer == text);
  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;
    let searchInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(".catalog-input-search");
    console.log(searchInput);
    if (text !== '' && event.type === 'click') {
      setItems(findItems);
    }
  }

  /* Чекбоксы */
  function filterArrayByManufacturers(arr: ItemTypes[], manufacturer: string[]) {
    let copyArr = [...arr];
    copyArr = copyArr.filter((el) => {
      for (let item of manufacturer) {
        if (el.manufacturer == item) {
          return el;
        }
      }
      return false;
    })
    setItems(copyArr);
    return copyArr;
  }

  /* Кнопка "Показать" */
  function handleShowCheckbox(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(1);
    const target = e.target as HTMLButtonElement;
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox")
    let arrayOfChecked: Array<string> = []
    if (target && target.textContent) {
      for (let checkbox of checkboxes) {
        if (checkbox.checked == true) {
          arrayOfChecked.push(checkbox.value)
        }
      }
      if (arrayOfChecked.length) {
        return priceAsc(filterArrayByManufacturers(props.data, arrayOfChecked))
      }
    }
  }

  /* Категории ухода*/
  function filterArrayByCare(arr: ItemTypes[], care_type: string) {
    let copyArr = [...arr];
    copyArr = copyArr.filter((el) => el.care_type.includes(care_type));
    setItems(copyArr);
    return copyArr;
  }

  function handleCareButtonTop(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(1);
    const target = e.target as HTMLButtonElement;
    const careButtonsTop: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-top");
    const careButtonsBtm: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-bottom");
    if (target && target.textContent) {
      for (let careButtonTop of careButtonsTop) {
        careButtonTop.classList.remove("active1");
      }
      target.classList.add("active1");
      for (let careButtonBtm of careButtonsBtm) {
        if (careButtonBtm && careButtonBtm.textContent == target.textContent) {
          careButtonBtm.classList.add("active2");
        }
        if (careButtonBtm && careButtonBtm.textContent !== target.textContent) {
          careButtonBtm.classList.remove("active2");
        }
      }
      return setItems(filterArrayByCare(props.data, target.textContent));
    }
  }

  function handleCareButtonBtm(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(1);
    const target = e.target as HTMLButtonElement;
    const careButtonsTop: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-top");
    const careButtonsBtm: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-bottom");
    if (target && target.textContent) {
      for (let careButtonBtm of careButtonsBtm) {
        careButtonBtm.classList.remove("active2");
      }
      target.classList.add("active2");
    }
    for (let careButtonTop of careButtonsTop) {
      if (careButtonTop && careButtonTop.textContent == target.textContent) {
        careButtonTop.classList.add("active1");
      }
      if (careButtonTop && careButtonTop.textContent !== target.textContent) {
        careButtonTop.classList.remove("active1");
      }
    }
    return setItems(filterArrayByCare(props.data, String(target.textContent)));
  }

  /* Кнопка "Показать" */
  function handleShowResults(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(1);
    let numericInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#price-low, #price-high");
    let inputA = numericInputs[0].valueAsNumber;
    let inputB = numericInputs[1].valueAsNumber;
    if (inputA || inputB) {
      return setItems(filterArrayByPrice(props.data, inputA, inputB));

    }
  }

  /* Кнопка "Удалить" */
  function handleClearResults(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentPage(1);
    const careButtonsTop: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-top");
    for (let careButtonTop of careButtonsTop) {
      careButtonTop.classList.remove("active1");
    }

    const careButtonsBtm: NodeListOf<HTMLDivElement> = document.querySelectorAll(".button-care-bottom");
    for (let careButtonBtm of careButtonsBtm) {
      careButtonBtm.classList.remove("active2");
    }

    const numericInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#price-low, #price-high")
    for (let input of numericInputs) {
      input.value = "";
    }

    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox")
    for (let check of checkboxes) {
      check.checked = false;
    }

    if (text !== '') {
      setText('');
    }

    setItems(props.data);
  }


  return (
    <div>
      <Header />

      <div className="wrapper">

        <div className="catalog-header-info">
          <a href=''>Главная</a>
          <span className="catalog-menu"><a href=''>Косметика и гигиена</a></span>
        </div>

        <div className="catalog-header-nav">
          <h1 className="main-header">Косметика и гигиена</h1>
          <p className="catalog-sort">Сортировка:

            <select onClick={handleSortClick}>
              {sortProducts.map((type: any, id: number) => {
                return (
                  <option
                    key={id}
                    value={type.value}>
                    {type.name}
                  </option>
                )
              })}
            </select>

          </p>
        </div>

        <div className="catalog-section-caretypes">
          {careTypesArray.map((care: any, id: number) => {
            return (
              <button
                onClick={handleCareButtonTop}
                key={id}
                className="button-care-top">
                {care.name}
              </button>
            )
          })}
        </div>

        <div className="main-catalog">

          <div className="aside">
            <div className="catalog-section-parameters">
              <h2 className="parameters-header">Подбор по параметрам</h2>
              <p className="parameters-price">Цена ₸</p>

              <div className="price-selector">
                <input type="number" id="price-low" className="price-selector-start" placeholder="0" />
                <p> - </p>
                <input type="number" id="price-high" className="price-selector-end" placeholder="10 000" />
              </div>

              <h3 className="">Производитель</h3>
              <input type="text" value={text} onChange={e => setText(e.target.value)} className="catalog-input-search" placeholder="Поиск..." />
              <button type='submit' onClick={handleOnclick} className="search">
                <img className="catalog-search-icon" src={searchIcon} alt="" />
              </button>
            </div>


            <div className='list-checkbox'>
              {manufacturersArray.map((type: any, id: number) => (
                <label key={id}>
                  <input type="checkbox" className='checkbox' value={type.title} />
                  {type.title}
                </label>
              ))}
            </div>

            <button type='submit' className='button-show-checkbox' onClick={handleShowCheckbox}>Показать</button>

            <div className="catalog-buttons">
              <div>
                <button onClick={handleShowResults} className="catalog-show-button">Показать цену</button>
              </div>
              <div>
                <button onClick={handleClearResults} className="catalog-delete-button">
                  <img className="catalog-delete-icon" src={trashButton} alt="" />
                </button>
              </div>
            </div>

            <div className="catalog-care-bottom">
              {careTypesArray.map((care: any, id: number) => {
                return (
                  <button
                    onClick={handleCareButtonBtm}
                    key={id}
                    className="button-care-bottom">
                    {care.name}
                  </button>
                )
              })}
            </div>

          </div>

          <div className="products-wrapper">

            <div className="products">
              {currentItems.map((arr: any, id: number) => {
                return (
                  <Item
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

            <div className="catalog-pages">
              <Paginator
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
              />
            </div >

          </div>

        </div >

      </div>
      <Footer />

    </div>

  )
}

export default Catalog;