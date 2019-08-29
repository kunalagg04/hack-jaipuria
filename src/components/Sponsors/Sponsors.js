import React , { useEffect } from 'react';
import './Sponsors.css';
import Particles from 'react-particles-js';


const particleOpt = { 

    particles : {   
        number : {
            value : 120,
            density : {
                enable : true  ,
                value_area : 800
            }
        },

        

      
    } ,

    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }

};



const Sponsors = () => {


   
    

    return(

        <div className="sponsors">
            <Particles className='particles' params={particleOpt}/>
            <div className="head">
                Sponsors
            </div>

            <div className="content">
                <div class="row">
                    <div class="col-lg-4">
     
                    <img className="google" src={require('../../assets/google.png')}/>
                    </div>

                    <div class="col-lg-4">

                    <img src={require('../../assets/microsoft.png')}/>
                        
                    </div>

                    <div class="col-lg-4">
                    <img className="google" src={require('../../assets/mozilla.png')}/>
                        
                    </div>
                </div>


                <div class="row" style={{marginTop: "5%" }}>
                    <div class="col-lg-4">
     
                    <img className="google" src={require('../../assets/mozilla.png')}/>
                    </div>

                    <div class="col-lg-4">

                    <img src={require('../../assets/microsoft.png')}/>
                        
                    </div>

                    <div class="col-lg-4">
                    <img className="google" src={require('../../assets/google.png')}/>
                        
                    </div>
                </div>
               
               
            </div>
         
        </div>

    );
}

export default Sponsors;
