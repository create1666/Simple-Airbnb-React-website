import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'
import React from 'react'
import './SearchResult.css'


function SearchResult({img, description, star, price}) {
  return (
    <div className='searchResult'>
      <div className='searchResult__info'>
        <img src={img} alt=''/>
        <FavoriteBorderIcon className='searchResult__heart'/>
      </div>
    </div>
  )
}

export default SearchResult
