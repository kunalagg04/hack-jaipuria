import React from 'react';
import './NavMob.css';

class NavMob extends React.Component{


    navShow(){
        document.querySelector(".hidden-box").style.display="Block";
        document.querySelector("#ham").style.display="none";
        document.querySelector("#ham2").style.display="block";
        document.querySelector(".hrefp-bar").style.background="rgb(0,0,0)"
        
    }

    navHide(){
        document.querySelector(".hidden-box").style.display="none";
        document.querySelector("#ham2").style.display="none";
        document.querySelector("#ham").style.display="block";
        document.querySelector(".hrefp-bar").style.background="rgba(0,0,0,0.1)"
    }


    render(){
        return(

            <div className="navbar-mobile">
            <div className="hrefp-bar">
                <span>
               <a href="/"> <img  id = "nav-mob-logo" src={require('../../assets/hack_jaipuria.png')}></img></a>
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

                <div><a href="/login">
                    Login
                </a></div>
                <div><a href="/course">
                    Courses
                    </a></div>
                    <div><a href="/blog">
                    Blog
                    </a></div>
                <div><a href="/contact">
                    Contact
                    </a></div>
                <div><a href="/signup">
                    Sign Up
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