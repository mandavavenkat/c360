import React from 'react';

import Styles from "./Marketing.module.scss";

function MarketingButton() {
  return (
    <div className={Styles.marketingbanner} >
         <div className={Styles.marketing} >
              <p className={Styles.text}>Lorem ipsum dolor sit amet, consectetur. <br/>
               Pellentesque nec tempor tortor.</p>
             
              <button type="button" className={Styles.touch}>Get In Touch</button>
           </div>
           <div className={Styles.marketing1} >
              <p className={Styles.text1}><span>Lorem ipsum dolor sit amet,</span>consectetur.
               Pellentesque <span>
                </span> nec tempor tortor.</p>
             
              <button type="button" className={Styles.touch1}>Get In Touch</button>
           </div>
    </div>
    

  )
}

export default MarketingButton