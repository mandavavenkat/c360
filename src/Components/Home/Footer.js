import React from 'react'
import Styles from "./Footer.module.scss";
import c360logo from '../../Assets/c360logo1.png';
import facebook from '../../Assets/facebook.png';
import Twitter  from '../../Assets/Twitter Icon.png';
import linkedin from '../../Assets/linkedin.png';

function Footer() {
  return (

//     <div className = {`${Styles.footer}`}>
//             <div className= {`${Styles.bg}`}>
//               <div class="row">
//                  <div class="col-1"></div>

//                    <div class="col-md-3">
//                      <img class="image" src={c360logo} style={{"height":"7.22vw","margin-top":"5.13888888vw"}}/>
//                           <div class="d-flex ">  
//                            <div>
//                             <img  src={facebook} style={{"height":"1.59722222vw","margin-top":"1.3888888888vw"}}/>
//      </div>
//   <div>
//     <img src={Twitter} style={{"height":"1.59722222vw","margin-left":"1.458333333vw","margin-top":"1.3888888888vw"}}/>
      
//    </div>
//    <div>
//    <img src={linkedin} style={{"height":"1.59722222vw","margin-left":"1.458333333vw","margin-top":"1.3888888888vw"}}/>
//     </div>
//  </div>

//                    </div>

//                    {/* <div class="col-md-1"></div> */}
//                    <div class="col-md-2" style={{"padding-left":"30px","padding-top":"4.8611111111vw"}}>
//                    <ul>
//           <li style={{'list-style-type':'none'}}><a href="" style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":'10px'}}>Services</a></li>
//            <li style={{"padding-top":"2.4305555555vw",'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":'10px'}}>Industries</a></li>
//             <li style={{"padding-top":"2.4305555555vw",'list-style-type':'none'}}><a href="" style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":'10px'}}>Products</a></li>

//              </ul>
//                    </div>
//                    <div class="col-md-2" style={{"padding-left":"30px","padding-top":"4.8611111111vw"}}>
//                    <ul>
//         <li style={{'list-style-type':'none'}}><a href="" style={{ "color":"#D0D0D0","text-decoration":"none"}}>Careers</a></li>
//                    <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none"}} >About Us</a></li>
//            <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none"}}>Case Studies</a></li>
//             </ul>
//                    </div>
//                    <div class="col-md-2"></div>


//               </div>

//               <div class="row">
//                 <div class="col-md-1"></div>
//                 <div className={`col-md-3 ${Styles.copy}`}>
//                      <p>Copyright 2021 C360soft.ai</p>

//                 </div>
//                 <div class="col-md-5"></div>
//                 <div className={`col-md-2 ${Styles.privacy}`}>
//                      <p>Privacy Policy</p>

//                 </div>
                
//               </div>
//             </div>
      
//     </div>
    <div className={`${Styles.footer1}`}>
        <div class="row">
             <div class="col-md-3">
              <div className={`${Styles.materialboxed}`}>

              <img src={c360logo} />
              </div>

    <div className={`d-flex ${Styles.ftl} `}>  
      <div className={`${Styles.fb}`}>
      <img  src={facebook} />
     </div>
   <div className={`${Styles.twi}`}>
      <img src={Twitter} />
      
      </div>
    <div className={`${Styles.lin}`}>
    <img src={linkedin} />
     </div>
  </div>
             </div>
             
             <div class="col-md-2"></div>
            {/* for mobiel */}
             <div className={`col-md-2 ${Styles.text}`}>
              <ul className={`${Styles.mob1}`}>
                <li><a href="#">Services</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Products</a></li>
              {/* <li style={{'list-style-type':'none'}}><a href="#" class="active" style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"14px","lineHeight":"14px"}}>Serv..ices</a></li>
            <li style={{"margin-top":"1.4305555555vw",'list-style-type':'none'}}><a href="#"style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"14px"}}>Industries</a></li>
            <li style={{"margin-top":"1.4305555555vw",'list-style-type':'none'}}><a href="#" style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"14px"}}>Products</a></li> */}

              </ul>

             </div>
             {/* mobile */}
             <div className={`col-md-2 ${Styles.tex}`} style={{"marginTop":"10px","lineHeight":"10px"}}>
             <ul className={`${Styles.ddd}`}>
             <li><a href="#">Careers</a></li>
                <li><a href="#">AboutUs</a></li>
                <li><a href="#">CaseStudies</a></li>
              {/* <li style={{'list-style-type':'none'}}><a href="" style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"14px"}}>Car.eers</a></li>
           <li style={{'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"14px"}} >About Us</a></li>
           <li style={{'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none","fontSize":"px"}}>Case Studies</a></li> */}
              </ul>

             </div>

             <div className={`col-md-2 ${Styles.text1}`}>
              <ul className={`${Styles.list}`}>
              <li ><a href="#">Services</a></li>
            <li ><a href="#" >Industries</a></li>
            <li ><a href="#">Products</a></li>


              {/* <li style={{'list-style-type':'none'}}><a href="#" class="active" style={{ "color":"#D0D0D0","text-decoration":"none"}}>Services</a></li>
            <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href="#"style={{ "color":"#D0D0D0","text-decoration":"none"}}>Industries</a></li>
            <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href="#" style={{ "color":"#D0D0D0","text-decoration":"none"}}>Products</a></li> */}

              </ul>

             </div>

             <div className={`col-md-2 ${Styles.text2}`}>
              <ul className={`${Styles.list1}`}>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Aboutus</a></li>
                <li><a href="#">CaseStudies</a></li>
                

              {/* <li style={{'list-style-type':'none'}}><a href="" style={{ "color":"#D0D0D0","text-decoration":"none"}}>Careers</a></li>
           <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none"}} >About Us</a></li>
           <li style={{"margin-top":"2.4305555555vw",'list-style-type':'none'}}><a href=""style={{ "color":"#D0D0D0","text-decoration":"none"}}>CaseStudies</a></li> */}
              </ul>
          
             </div>
             <div class="col-md-3"></div>
             {/* <div class="col-sm-1"></div> */}
           
             
        </div>
        <div className={`row ${Styles.dsc}`}>
          {/* <div class="col-sm-1"></div> */}
          {/* <div class="col-sm-1" style={"width":"10px;"}></div> */}
        <div className={`col-sm-4 ${Styles.copy}`} >
              <p>Copyright 2021 C360soft.ai</p>
             </div>
             <div class="col-sm-4"></div>
             <div className={`col-sm-2 ${Styles.privacy}`}>
              <p>Privacy Policy</p>
             </div>
        </div>
        <div className={`${Styles.dash}`}>
          <p className={`${Styles.c}`}>Copyright 20211 C360soft.ai</p>
          <p className={`${Styles.p}`}>Privacy Policy</p>
        </div>


    </div>

  )
}

export default Footer