import React from 'react'
import _ from 'lodash'


export default function Pagination({ pages, setPage, activePage }) {

    function previousPage() {
        setPage(oldPage => {
            let previousPage = oldPage - 1
            if (previousPage < 1) {
                previousPage = pages
            }
            return previousPage
        })
    }
    function nextPage() {
        setPage(oldPage => {
            let previousPage = oldPage + 1
            if (previousPage > pages) {
                previousPage = 1
            }
            return previousPage
        })
    }

    return (
        <nav>
            <ul className='pagination d-flex justify-content-center mt-5' dir='rtl'>
                <li
                    onClick={previousPage}
                    className='page-item'
                >
                    <a className='page-link' href="#">قبلی</a>
                </li>
                {_.times(pages, (index) => (
                    <li
                        key={"pagination" + index}
                        className={`page-item ${index + 1 === activePage ? "active" : ""}`}
                        onClick={() => setPage(index + 1)}
                    >
                        <a className="page-link" href="#">{index + 1}</a>
                    </li>
                ))}
                <li
                    onClick={nextPage}
                    className='page-item'
                >
                    <a className='page-link' href="#">بعدی</a>
                </li>
            </ul>
        </nav>
    )
}
