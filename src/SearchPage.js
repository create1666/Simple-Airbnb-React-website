import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {
  return (
    <div className='SearchPage'>
      <div className='searPage__info'>
        <p>56 stays . 2 July to 26 July . 9 guests</p>
       <h1>Nearby Searches</h1>
       <Button variant ='outlined'> Cancellation</Button>
       <Button variant ='outlined'> Cancellation</Button>
       <Button variant ='outlined'> Cancellation</Button>
       <Button variant ='outlined'> Cancellation</Button>
       <Button variant ='outlined'> Cancellation</Button>
      </div>
      <SearchResult/>
    </div>
  )
}

export default SearchPage
