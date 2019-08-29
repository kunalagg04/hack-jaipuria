import React , { useEffect } from 'react';
import './Jcard.css';

const Jcard = (props) => {


   
    

    return(

        <div className="Jcard ">
            
            <div className="pic">
                {/* <img src={require(`${props.img}`)}/> */}
                <img src={require('../../../assets/kkx.jpg')} />
            </div>

            <div className="content">
                <h4>
                    {/* {props.name} */}
                    Kautuk Kundan
                </h4>
                <div>
                    Machine Learner , ZS
                </div>
                <div className="icons">
                <i class="fab fa-facebook fa-lg"></i>
                            <i class="fab fa-twitter fa-lg"></i>
                            <i class="fab fa-github fa-lg"></i>
                </div>
            </div>


         
        </div>

    );
}

export default Jcard;
