import React from 'react'


import Banner from '../Banner'
import Ads from '../Ads'


import Navbar from '../Navbar'
import Bestsellers from '../Bestsellers'
import WatchAds from '../WatchAds'
import Offers from '../Offers'
import Newarrivals from '../Newarrivals'



const Home = () => {
  return (
    
    <>
    <Navbar/>
    <Banner/>
    <Ads/>
  <Newarrivals/>
   <Bestsellers/>
   <WatchAds/>
   <Offers/>
    </>
  )
}

export default Home