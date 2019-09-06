import './Header.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navbar from '../../components/navbar/Navbar';
// import { Link } from 'react-router-dom';
import MdInformationCircle from 'react-ionicons/lib/MdInformationCircle';
import NavMob from '../nav-mob/NavMob';
import MdHelp from 'react-ionicons/lib/MdHelp';
import MdStopWatch from 'react-ionicons/lib/MdStopwatch';
import MdAperture from 'react-ionicons/lib/MdAperture';
import MdCompass from 'react-ionicons/lib/MdCompass';
import MdCube from 'react-ionicons/lib/MdCube';
import { Link, animateScroll as scroll } from "react-scroll";

/* For Particle.JS */
const particleOpt = { 

    particles : {   
        number : {
            value : 90,
            density : {
                enable : true  ,
                value_area : 800
            }
        },

        "opacity": {
            "value": 1,
            "random": true, // Set to false in our case
            "anim": {
              "enable": true,
              "speed": 9,
              "opacity_min": 0.4,
              "sync": false
            }
          }
    } ,

    "interactivity": {
        "events": {

            onresize: {
                enable: true,
                // density_auto: true,
                // density_area : 400 
                // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
              },

            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }

};


class Header extends React.Component{

   
    render(){

        if(document.body.offsetWidth > 600){
        return(
         <div>
             <div id="header">
                 {/* <Navbar/> */}

                 <div className="land-nav">

                      <div className="slogo">
                          <img src={require('../../assets/gzb_logo.jpg')}/>
                      </div>

                            
                        <div className="icons">


                        <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {600} 
                                    to="about">
                                    <MdInformationCircle className="mdicon"  fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>
                               
                            
                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {800} to="timeline">
                                    <MdStopWatch className="mdicon"  fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>

                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {900} to="prize">
                                     <MdCube className="mdicon"  fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>

                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {1000} to="themes">
                                     <MdAperture className="mdicon" fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>

                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {800} to="venue">
                                      <MdCompass className="mdicon" fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>

                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {1000} to="faq">
                                       <MdHelp className="mdicon" fontSize="1.7em" color="rgba(255,255,255,0.9)"/>
                            </Link>

                           
                            
                           
                          
                          
                          
                            
                           
                             </div>
                         </div>

                 <Particles className='particles' params={particleOpt}></Particles>
                   
                    
                    
                     <div id="content">
                        
                         <div class="row">
                             {/* <div class="col-2">
                                 <div id="logo">
                                     <i class="fab fa-facebook-square fa-lg"></i><br/>
                                     <i class="fab fa-instagram fa-lg"></i><br/>
                                     <i class="fab fa-twitter-square fa-lg"></i><br/>
                                     <i class="fab fa-github-square fa-lg"></i>
                                 </div>
                             </div> */}

                              <div class="col-12">
                                 <div id="head0">
                                      <img className='jlogo' src={require('../../assets/cybercrew.svg')}/> <span style={{ marginRight : "1%" , marginLeft : "1%" }}> Cyber Crew </span>   &amp;
                                      <img style={{ marginLeft : "2%"}} className="dsclogo" src = {require('../../assets/dsclogo.svg')}/> DSCBVP
                                 </div>
                                 <div id="head1">
                                      PRESENTS
                                 </div>
                                 <div id="heading">
                                     HACK@JAIPURIA
                                 </div>
                                 <div className="details">
                                      <div class="row">
                                          <div class="col-5">
                                          <i class="fas fa-calendar-week"></i>
                                          23 - 24 October' 2019
                                          </div>
                                          <div className="col-7">
                                          <i class="fas fa-map-marker-alt"></i>
                                          Seth Anandram Jaipuria School
                                          </div>
                                      </div>
                                 </div>
                                 <div className="rbut">
                                 <button type="button" class="btn btn-danger">Apply Now</button>
                                 </div>
                                {/* <Link to="/course"> <button id="butcourse" type="button" class="btn btn-primary">Browse our Courses</button></Link> */}
                             </div>

                         </div>
                        
                     </div>
                     <div className="rocket">
                             <img 
                            //  class="animated infinite pulse delay-2s"
                              src= {require('../../assets/rocketf.svg')}/>
                         </div>
                     
                     
             </div>

           
             
          
         </div>
          
        
        );
        }

        else{
            return(

                <div className="ml">
                    <NavMob/>
                     <Particles className='particles' params={particleOpt}></Particles>
              
                <div className="mob-head">
                <div className="l-top">
                <div className="head">
                  <img src={require('../../assets/dsclogo.svg')} style={{width : "12%"}} /> DSCBVP
                </div>
                <div className="pr">
                    presents
                </div>

                <div className="main">
                    HACK@JAIPURIA
                </div>


               

         
<div>

<div className="date">

         

<i class="fas fa-calendar-week"></i>
23 - 24 October' 2019


<i class="fas fa-map-marker-alt lo"></i>
                             SAJS
</div>

</div>
        

             <div className="rbut">
                                 <button type="button" class="btn btn-danger">Apply Now</button>
                                 </div>
        
         
               
                
                </div>


                <div className="rocket">
                             <img 
                            //  class="animated infinite pulse delay-2s"
                              src= {require('../../assets/rocketf.svg')}/>
                         </div>
             
        
                
               
                {/* <div className="ill">
                  <img src={require('../../assets/header.svg')}></img>
                </div> */}
              </div>
              </div>
            );
        }
    }
}

export default Header;