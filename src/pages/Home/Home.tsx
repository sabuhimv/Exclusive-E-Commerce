import React from 'react'
import FlashSales from '../../components/Sections/FlashSales/FlashSales'
import Categories from '../../components/Sections/Categories/Categories'
import BestSelling from '../../components/Sections/BestSelling/BestSelling'

const Home = () => {
  return (
    <div>
      <Categories />
      <FlashSales />
      <BestSelling />
    </div>
  )
}

export default Home