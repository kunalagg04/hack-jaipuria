import React from 'react';

import './Judge.css';
import Jcard from './Jcard/Jcard';


const Judge = () => {
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

export default Judge;
