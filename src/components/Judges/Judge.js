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


    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">

      <Jcard/>
       
    </div>
    <div class="carousel-item">
     <Jcard/>
    </div>
    <div class="carousel-item">
     <Jcard/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      </div>


    );
  }
}

export default Judge;
