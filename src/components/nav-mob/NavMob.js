import React from 'react';
import './NavMob.css';

import { Link, animateScroll as scroll } from "react-scroll";

class NavMob extends React.Component{


    navShow(){
        
        document.querySelector(".hidden-box").style.display="Block";
        document.querySelector("#ham").style.display="none";
        document.querySelector("#ham2").style.display="block";
        document.querySelector(".top-bar").style.background="rgb(0,0,0)"
        
    }

    navHide(){
        document.querySelector(".hidden-box").style.display="none";
        document.querySelector("#ham2").style.display="none";
        document.querySelector("#ham").style.display="block";
        document.querySelector(".top-bar").style.background="rgba(0,0,0,0.1)"
    }


    render(){
        return(

            <div className="navbar-mobile">
            <div className="top-bar">
                <span>
               <a to="/"> <img  id = "nav-mob-logo" src={require('../../assets/gzb_logo.jpg')}></img></a>
                </span>
                <span id="ham" onClick={this.navShow}>
                <img id="ham-icon" src={require('../../assets/hamburger.png')}></img>
                </span>
                <span id="ham2" onClick={this.navHide}>
                <img id="ham-icon-2" src={require('../../assets/hamburger.png')}></img>
                </span>   
            </div>

            <div className="hidden-box">
                <div className="nav-content">

                <div>
                    <Link
                       to="about"
                       spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration= {600} >
                       About
                    </Link>
                </div>
                <div>
                    <Link to="timeline"
                     spy={true}
                     smooth={true}
                     offset={-10}
                     duration= {600}>
                      Schedule
                    </Link>
                </div>
                <div>
                    <Link to="prize"
                     spy={true}
                     smooth={true}
                     offset={-10}
                     duration= {600}>
                       Prizes
                    </Link>
                </div>
                <div>
                    <Link to="theme"
                     spy={true}
                     smooth={true}
                     offset={-10}
                     duration= {600}>
                      Themes
                    </Link>
                </div>
                <div>
                    <Link to="venue"
                     spy={true}
                     smooth={true}
                     offset={-10}
                     duration= {600}>
                      Venue
                    </Link>
                </div>
                <div>
                    <Link to="faq"
                     spy={true}
                     smooth={true}
                     offset={-10}
                     duration= {600}>
                      FAQ
                    </Link>
                </div>
            
              

                </div>
               
                <div className="sm-dis">
                   <div>
                   <i class="fab fa-github fa-2x"></i>
                   </div>
                   <div>
                   <i class="fab fa-instagram fa-2x"></i>
                   </div>
                   <div>
                   <i class="fab fa-twitter fa-2x"></i>
                   </div>
                   <div>
                   <i class="fab fa-facebook-f fa-2x"></i>
                   </div>
</div>
            </div>
           
        </div>

        );
    }
}

export default NavMob;