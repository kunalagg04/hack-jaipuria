import React , { useEffect } from 'react';
import './Jcard.css';

const Jcard = (props) => {


   
    

    return(

        <div className="Jcard ">
            
            <div className="pic">
                {/* <img src={require(`${props.img}`)}/> */}
                <img src={require('../../../assets/kk.jpg')} />
            </div>

            <div className="content">
                <div>
                    {/* {props.name} */}
                    Kautuk Kundan
                </div>
                <div>
                    Machine Learner , ZS
                </div>
            </div>


         
        </div>

    );
}

export default Jcard;
