import React from 'react'


import Banner from '../Banner'
import Ads from '../Ads'

import NewArrivals from '../NewArrivals'
import Navbar from '../Navbar'
import Bestsellers from '../Bestsellers'
import WatchAds from '../WatchAds'
import Offers from '../Offers'


const Home = () => {
  return (
    
    <>
    <Navbar/>
    <Banner/>
    <Ads/>
   <NewArrivals/>
   <Bestsellers/>
   <WatchAds/>
   <Offers/>
    </>
  )
}

export default Home