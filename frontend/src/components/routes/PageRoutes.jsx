import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BuySellPage from '../pages/BuySellPage'
import AddListing from '../pages/AddListing'

export default function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/buy-sell-page' element={<BuySellPage/>}/>
        <Route path='/buy-sell-page/add-listing' element={<AddListing />} />
      </Routes>
    </div>
  )
}
