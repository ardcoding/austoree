import React from 'react'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Typogra from '../../components/Typogra'

const Home = () => {
  return (
    <div>
      <Hero />
      <section className='mt-24'>
      <Typogra style={{textShadow: "8px 0px 8px gray"}}>En Yeni Ürünler</Typogra>
      <Products/>
      <Typogra title="jıd" className="mt-32" style={{textShadow: "8px 0px 8px gray"}}>En Popüler Ürünler</Typogra>
      <Products/>
      </section>
    </div>
  )
}

export default Home