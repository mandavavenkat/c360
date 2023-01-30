import React from 'react'
import style from '../../Components/Home/Header.module.scss'
import logo from '../../Assets/Group 4.png'
// import logo1 from '../../Assets/largelogo.png'
import Banner from '../../Components/Home/Banner'
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

function Header() {
  return (
    <div class={`${style.header__main} sm`}>
      <nav id="navbar" class={style.header__elements}>
        <img src={logo} class={style.logo} alt="waiting..." />
        <ul>
          <li>Services</li>
          <li>Industries</li>
          <li>Products</li>
          <li>Careers</li>
          <li>Case Studies</li>
          <li>About C360</li>
        </ul>
       
        <HiMenu size={25} class={style.menubutton}/>
      </nav>

      <Banner />
    </div>


    // <div class={style.header__main}>
    //   <nav id="navbar" class={style.header__elements}>

    //      <ul>
    //        <li>Services</li>
    //        <li>Industries</li>
    //        <li>Products</li>
    //        <li>Careers</li>
    //        <li>Case Studies</li>
    //        <li>About C360</li>
    //      </ul>
    //    </nav>
    //    <div class={style.largelogo}><img src={logo1} class={style.logo} alt="waiting..." /><h1 class={style.logotext}>Software</h1></div>

    //    <Banner/>
    // </div>

  )
}

export default Header