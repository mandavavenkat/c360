import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../Components/Home/industries.scss'
import finance from '../../Assets/finance.png'
import supplichain from '../../Assets/Supplychain.png'
import automobile from '../../Assets/Automobile.png'
import healthcare from '../../Assets/healthcare.png'
import marketing from '../../Assets/marketing.png'
import insurance from '../../Assets/Insurance.png'
import retail from '../../Assets/retail.png'
import telecommunication from '../../Assets/telecommunication.png'
import education from '../../Assets/education.png'
import manufacturing from '../../Assets/manufacturing.png'

const hello=[{
  image:finance,
  heading:'Finance',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:supplichain,
  heading:'Supply Chain & Logistics',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:automobile,
  heading:'Automobile',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:healthcare,
  heading:'Healthcare',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:marketing,
  heading:'Marketing',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:insurance,
  heading:'Insurance',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:retail,
  heading:'Retail',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:telecommunication,
  heading:'Telecom',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:education,
  heading:'Education',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
},
{
  image:manufacturing,
  heading:'Manufacturing',
  lorem:'Lorem ipsum dolor sit amet, consectetur. Pellentesque nec tempor tortor.'
}]
function Industries() {
const[slideIndex,setSlideIndex]=useState(0)

  const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "0vw",
          slidesToShow: 3,
          speed: 500,
          autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 1000,
    slide: 'div',
    cssEase: 'ease-out',
    autoplaySpeed: 2500,
    
        beforeChange: (current,next)=>setSlideIndex(next)
      }

  return (
    <div className='industriesfirst_div'>
      
    <div className='industries-main-fixed-Div align-items-center'>
    <div  className='industries_text'>
    <span>Industries</span>
    </div>
      <div className='industries-subDiv'>
      
        
      <Slider {...settings} className='mainvestingSlider'>
       
        {
                        hello.map((value,index)=>(
                          
                          <div className={index===slideIndex ?'slide slide-active':'slide'} key={index}>
                            <div className='industries-cards-subDiv'>
                             <div className='industries-imageDiv' >
                              <img className='image' src={value.image} alt='not viewed'/>
                             </div>
                             <div className='industries_card_text_div'>
                              <span className='industries_text_heading'>{value.heading}</span>
                              <div className='industries_lorem_div'>
                              <span>{value.lorem}</span>
                              </div>
                             </div>
                            </div>                          
                           </div>
                        ))
                        
                           
                            
                          
                        }
                   
        
                        
                           
              </Slider>

             

    </div>
    </div>
    </div>
  )
}

export default Industries