import React from 'react';

import './Themes.css';


const Themes = () => {
  return (
    <div id="themes" className="themes">
     <div className="head">
       Themes
     </div>
     <div className="body">
       <div class="right">
          <img src={require('../../assets/entertainment.svg')}/>
          <span>Memes &amp; Entertainment</span>
       </div>
       <div className="left"> 
      
          <span>Heath &amp; Fitness</span>
          <img src={require('../../assets/health.svg')}/>
       </div>
       <div className="right">
       <img src={require('../../assets/campus.svg')}/>
          <span>Smart Campus</span>
       </div>
       <div className="left">
     
          <span>Open Innovation</span>
          <img src={require('../../assets/open.svg')}/>
       </div>
  
     </div>
    </div>
  );
}

export default Themes;
