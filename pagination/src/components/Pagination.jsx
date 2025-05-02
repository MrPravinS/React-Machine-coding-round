import React from 'react'
import PAGE_SIZE from '../constant'

const Pagination = ({currentPage,noOfPages,goTONext,goTOPrev,handlePagination}) => {

    
  return (
    <div className="pagination-cart">
        <button disabled={currentPage === 0} onClick={()=>goTOPrev()} className="n">⬅️</button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button onClick={() => handlePagination(n)} className={"n " + (n === currentPage ? "active":"")} key={n}>
            {n}
          </button>
        ))}
        <button disabled={currentPage === noOfPages - 1} onClick={()=>goTONext()} className="n">➡️</button>
      </div>
  )
}

export default Pagination