import React from 'react'
import FlashSales from '../../components/Sections/FlashSales/FlashSales'
import Categories from '../../components/Sections/Categories/Categories'
import BestSelling from '../../components/Sections/BestSelling/BestSelling'
import GetCategory from '../../components/Sections/GetCategory/GetCategory'

const Home = () => {
  return (
    <div>
      <GetCategory/>
      <FlashSales />
      <Categories />
      <BestSelling />
    </div>
  )
}

export default Home