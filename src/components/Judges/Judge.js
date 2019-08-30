import React from 'react';

import './Judge.css';
import Jcard from './Jcard/Jcard';


const Judge = () => {

  if(document.body.offsetWidth > 600){
  return (
    <div className="judge">

      <div className="head">
        Judges
      </div>

      <div className="content">
        <div className="row">
          <div className="col-3">

            <Jcard 
            img="../.././assets/kk.jpg" />

          </div>

          <div className="col-3">

          <Jcard 
          img="../.././assets/kk.jpg"
           />
            
            </div>

            <div className="col-3">

            <Jcard 
            img="../.././assets/kk.jpg" />
            
            </div>

            <div className="col-3">

            <Jcard 
            img="../.././assets/kk.jpg" />
            
            </div>
        </div>
      </div>
      
    
    </div>
  );
  }
  else{
    return(
      <div className="judge">


        
      <div className="head">
      Judges
    </div>

<div className="cardi">

<Jcard/>

</div>
    


   

      </div>


    );
  }
}

export default Judge;
