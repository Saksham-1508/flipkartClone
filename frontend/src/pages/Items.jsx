import React from 'react'
import ItemCard from '../components/ItemCard'
import Sidebar from '../components/Sidebar'
import { SortBar } from '../components/SortBar'

const Items = () => {
  return (
    <div className='items-page'>
      <div className='side-bar-container'>
        <Sidebar/>
      </div>
      <div className="container">
        <SortBar/>
        <div className='items-container'>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
      </div>
    </div>
  )
}

export default Items