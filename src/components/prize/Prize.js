import './Prize.css';
import React from 'react';
import Pcard from './Pcard/Pcard';



const Prize = () => {
  return (
    <div className="prize">
      <div className="row">
          <div className="col-5 content" >
            <div className="main">
                <div className="head">
                    Prizes
                </div>
                <div className="dis">
                   <Pcard
                     pr="1 st Prize"
                     money="INR 20k" />
                </div>
                <div className="dis mid">
                 <div className="row">
                   <div className="col-3">

                   </div>
                   <div className="col-9">

                   <Pcard
                      pr="2 st Prize"
                      money="INR 10k"
                      width="90%" />

                   </div>
                 </div>
                
                </div>
                <div className="dis">
                   <Pcard
                     pr="3 st Prize"
                     money="INR 5k"/>
                </div>
            </div>
          </div>
          <div className="col-7 graphic">
              <img src={require('../../assets/gifts.svg')}/>
          </div>
      </div>
    </div>
  );
}

export default Prize;
