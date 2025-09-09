import React from 'react'

const Pagination = ({goToNextPage , goToPrevPage}) => {
  return (
    <div>
        {goToPrevPage && <button onClick={goToPrevPage}>Previos Page</button>}
        {goToNextPage && <button onClick={goToNextPage}>Next Page</button>   }
        
      
    </div>
  )
}

export default Pagination
