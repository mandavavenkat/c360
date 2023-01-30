import React from 'react'
import style from '../../Components/Home/Banner.module.scss'
import One from '../../Assets/bannerimg1.png'
import Two from '../../Assets/bannerimg2.png'
import Three from '../../Assets/bannerimg3.png'
// import "../../Components/banner.css"

function Banner() {

    // var direction = type == 'next' ? 'right' : 'left'


    return (
        <div className={`${style.bannermain}`}>
            <div className={`${style.imgbanner}`}>


                <div className={`${style.banner1}`}>
                 <div class={`${style.banner__caption}`}>
                 <span>Evaluate Your Business to the
                    <br/> Next Level with our<br/> Customized Solutions</span>
                 </div>                      
                </div>

                <div className={`${style.banner2}`}>
                 <div class={`${style.banner__caption}`}>
                    <span className={`${style.text1}`}>
                    Lorem ipsum dolor sit amet, <br></br>
                  consectetur adipiscing elit. 
                    </span>
                 </div>
                </div>

                <div className={`${style.banner3}`}>
                <div class={`${style.banner__caption}`}>                
                    <span  className={`${style.text2}`}>
                    Lorem ipsum dolor sit amet, <br></br>
                  consectetur adipiscing elit. 
                    </span>
                 </div> 
                </div>
                <button class={`${style.getintouch}`}>Get in Touch</button>

            </div>

        </div>
      
    )
}

export default Banner