import React from 'react';
import '../styles/Paginator.css';
import arrowLeft from './/../images/arrow-left.svg';
import arrowRight from './/../images/arrow-right.svg';

const Paginator = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }: any) => {
    let pages: number[] = [];
    let allPages: number = Math.ceil(totalItems / itemsPerPage);
    for (let pagenumber = 1; pagenumber <= allPages; pagenumber++) {
        pages.push(pagenumber);
    }
    const toTopOnClick = () => { window.scrollTo({ top: 260, behavior: "smooth" }) }


    return (
        <div className="items-pages">
            <div className="pagination">
                <button onClick={() => {
                    if (currentPage != 1) {
                        toTopOnClick();
                        return setCurrentPage(--currentPage);
                    }
                }}
                    className="pagination-button">
                    <img className="arrow-left" src={arrowLeft} alt="" />
                </button>
                <div className="pagination-pages">
                    {pages.map((page: number, id: number) => {
                        return (
                            <button
                                key={id}
                                onClick={() => {
                                    if (currentPage !== page) {
                                        toTopOnClick()
                                        return setCurrentPage(page)
                                    }
                                }}
                                className={`items-page ${page === currentPage ? "active" : ""}`}>
                                {page}
                            </button>
                        )
                    })}
                </div>
                <button onClick={() => {
                    if (currentPage < allPages) {
                        toTopOnClick();
                        return setCurrentPage(++currentPage);
                    }
                }}
                    className="pagination-button">
                    <img className="arrow-right" src={arrowRight} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Paginator;