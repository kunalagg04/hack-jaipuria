import React , { useEffect } from 'react';
import './Footer.css';

const Footer = () => {


   
    

    return(

        <div className="footer">

         
                    <div className="con">
                        <img src={require('../../assets/hack_jaipuria.png')}/>
                        <a href="mailto:Cybercrew@ghaziabad.jaipuriaschools.com">

                            <div className="email">
                            Cybercrew@ghaziabad.jaipuriaschools.com
                            </div>

                            </a>

                            <div className="icons">
                            <a href="https://www.facebook.com/DSCBVP/">
                            <i class="fab fa-facebook-f fa-lg"></i></a>

                            <a href="https://www.instagram.com/dscbvp/">
                            <i class="fab fa-instagram fa-lg"></i>
                            </a>
                           
                           <a href="http://github.com/DSC-BVP">
                            <i class="fab fa-github-alt fa-lg"></i>
                            </a>

                            {/* <a href="tel: 8076989248">
                            <i class="fas fa-phone-alt"></i>
                            </a>  */}

                            </div>

                            <div className="details">
                            <i class="far fa-copyright"></i> Hack@Jaipuria , Seth Anandram Jaipuria School | Designed with <i class="fas fa-heart"></i> &amp; <i class="fas fa-coffee"></i> by Team-Hack@Jaipuria
                            
                            </div>

                        
                    </div>


              
                
    
        </div>

    );
}

export default Footer;
