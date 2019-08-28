import React from 'react';
import './About.css';

const About = () => {

    return(

        <div className="about">
         <div className="row">
             <div class="col-6 a-img">
                <img src={require('../../assets/about.svg')}/>
             </div>
             <div className="col-6 a-text">
                 <div className="writeup">
                     <div className="head">
                       About
                     </div>
                     <div className="content">
                     Hack@BVP 2.0 is an annual event organised by Bharati Vidyapeeth's College of Engg. New Delhi , established in the year 1999, affiliated to Guru Gobind Singh Indraprastha University, New Delhi, and approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. of of India.

Every year, coders from all over India come to compete and win this 24-hour long hackathon against some of the most skilled teams. With over 250 participants attending last year’s Hack@BVP , we are continuing to extend this event to showcase the diversity and knowledge of the developers. The dates for the event are 28th - 29th September 2018 .It provides a platform to budding programmers to come up with a solution to an existing problem using technology. Students can participate in a team size of upto 5 members .
                     </div>
                 </div>


             </div>
         </div>
       </div>

    );
  

}

export default About;