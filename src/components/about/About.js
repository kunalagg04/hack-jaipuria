import React from 'react';
import './About.css';

const About = () => {

    return(

        <div className="about">
         <div className="row">
             <div class="col-lg-6 col-sm-12 a-img">
                <img src={require('../../assets/about.svg')}/>
             </div>
             <div className="col-lg-6 col-sm-12 a-text">
                 <div className="writeup">
                     <div className="head">
                       About
                     </div>
                     <div className="content">
                        <div>

                        It will be a 24-hour offline event aimed at recognizing innovators from a young age. Hackathons urge students to combine all their knowledge to break down real business problems. 
Not only would this hackathon inspire students to pursue critical thinking, it would also allow them to think unconventionally .

                        </div>

                        <div style={{marginTop : "4%"}}>

                        
                    
This hackathon would help them work on out of the box solutions and prepare them to apply these solutions to some real life problems.
                     
</div>




                     </div>
                 </div>


             </div>
         </div>
       </div>

    );
  

}

export default About;