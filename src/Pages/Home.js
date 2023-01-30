import React from 'react'
import Industries from '../Components/Home/Industries'
import ServiceList from '../Components/Home/ServiceList'
import Marketing from '../Components/Home/Marketing'
import Footer from "../Components/Home/Footer"
import Header from '../Components/Home/Header'

import Banner from '../Components/Home/Banner'


function Home() {
  return (
    <div>    
     <Header/> 
    <ServiceList/>    
    <Industries/>    
    <Marketing/>
    <Footer/>  
    </div>
  )
}

export default Home