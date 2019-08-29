import React from 'react';
import './NavMob.css';
import $ from 'jquery';

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
               <a to="/"> <img  id = "nav-mob-logo" src={require('../../assets/hack_jaipuria.png')}></img></a>
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

                <div><a to="/login">
                    About
                </a></div>
                <div><a to="/course">
                    Schedule
                    </a></div>
                    <div><a to="/blog">
                     Prizes
                    </a></div>
                <div><a to="/contact">
                    Themes
                    </a></div>
                <div><a to="/signup">
                    Venue
                    </a></div>
                    <div><a to="/signup">
                    Judges
                    </a></div>
                    <div><a to="/signup">
                    Sponsors
                    </a></div>
                    <div><a to="/signup">
                    FAQ
                    </a></div>
            
              

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