import React from 'react';
import './Pcard.css';

const Pcard = (props) => {
    return(
        <div className="pcard" style={{ width: `${props.width}` }}>
          <div className="headi">
              {props.pr}
          </div>
          <div className="coni">
              {props.money}
          </div>
        </div>
    );
}

export default Pcard;