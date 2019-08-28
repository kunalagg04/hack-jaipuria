import './Navbar.css';
import React from "react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

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

    
    if(document.body.offsetWidth > 600) {
    return(

        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            
                {/* <Link class="navbar-brand" to="/">
                     <img id="navlogo" alt="logo" src={require("../../assets/logo.webp")}></img> 
                </Link> */}
            

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    
                    <li class="nav-item active">
                         <a className="nav-link"> Courses<span class="sr-only">(current)</span></a>
                     </li>
                    
                    <li class="nav-item active">
                         <a className="nav-link"> Blog</a>
                     </li>
                    
                     <li class="nav-item active">
                       <a className="nav-link">Login</a></li> 
                    
                     <li class="nav-item">
                         <button id="butcontact" type="button" class="btn btn-primary">Contact Us</button>
                     </li>

                </ul>
              </div>
            </nav> 
    );
    }

    else{
        return(
            <div className="navbar-mobile">
                <div className="top-bar">
                    <span>
                   {/* <Link to="/"> <img  id = "nav-mob-logo" src={require('../../assets/logo.webp')}></img></Link> */}
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

                    <div><Link to="/login">
                        Login
                    </Link></div>
                    <div><Link to="/course">
                        Courses
                        </Link></div>
                        <div><Link to="/blog">
                        Blog
                        </Link></div>
                    <div><Link to="/contact">
                        Contact
                        </Link></div>
                    <div><Link to="/signup">
                        Sign Up
                        </Link></div>
                  

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
}

export default Navbar;