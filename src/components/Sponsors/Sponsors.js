import React , { useEffect } from 'react';
import './Sponsors.css';

const Sponsors = () => {


   
    

    return(

        <div className="sponsors">
            <div className="head">
                Sponsors
            </div>

            <div className="content">
                <div class="row">
                    <div class="col-4">
     
                    <img className="google" src={require('../../assets/google.png')}/>
                    </div>

                    <div class="col-4">

                    <img src={require('../../assets/microsoft.png')}/>
                        
                    </div>

                    <div class="col-4">
                    <img className="google" src={require('../../assets/mozilla.png')}/>
                        
                    </div>
                </div>
               
               
            </div>
         
        </div>

    );
}

export default Sponsors;
