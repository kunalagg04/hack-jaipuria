import React from 'react';
import './Project.css';

const Project = () => {

    return(

        <div id="project" className="project">
             <div className="head">
                       Project
                     </div>
         <div className="row">
           
             <div className="col-lg-6 col-sm-12 a-text">
                 <div className="writeup">
                    
                     <div className="content">
                        <div>

                        We expect the participants to build a software or hardware solution based on the given themes within the duration of the hack.

                        </div>

                        <div style={{marginTop : "4%"}}>

                        
                    
                        The application/product must be a working prototype and should have most if not all the features in working condition. Extra points will be provided to a completely functional application/product.             
</div>

                     </div>
                 </div>

             </div>

             <div class="col-lg-6 col-sm-12 a-img">
                <img src={require('../../assets/project1.svg')}/>
             </div>

         </div>
       </div>

    );
  

}

export default Project;