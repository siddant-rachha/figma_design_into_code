//components
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Image from '../../components/Image/Image'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import ProductTypes from '../../components/ProductTypes/ProductTypes'
import Services from '../../components/Services/Services'
import Sale from '../../components/Sale/Sale'

//images
import hero from '../../assets/images/hero.png'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'


//data
import { categorybanner, catergories, productTypes, products } from '../../data/data'

const Home = () => {
  return (
    <>
      <Navbar />
      <Image style={{ marginTop: "136px" }} src={hero} />
      <Categories data={catergories} banner={categorybanner} />
      <Products products={products.concat(products)} title="Trending T-Shirts" />
      <Image src={banner1} />
      <Products products={products} title="New Products" />
      <Products products={products} title="Best Selling Products" />
      <ProductTypes productTypes={productTypes} />
      <Image src={banner2} />
      <Sale />
      <Services />
      <Footer />

    </>
  )
}

export default Home