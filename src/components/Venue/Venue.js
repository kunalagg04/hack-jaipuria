import React from 'react';

import './Venue.css';


const Venue = () => {
  return (
    <div id="venue" className="venue">
        <div className="head">
            Venue
        </div>
        <div className="content">
            <div className="row">
                <div className="col-lg-6">
                <div id="fmap">
                         

                         <iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=new%20delhi&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'><div class="zxos8_gm"><a href="https://themesort.com/category/agency-themes">Agency templates at themesort</a></div><div style={{overflow:'hidden'}}><div id='gmap_canvas' style={{height:100+"%" , width:100+"%"}}></div></div><div><small>Powered by <a href="https://www.embedgooglemap.co.uk">Embed Google Map</a></small></div></iframe>
                        </div>
                </div>
                <div className="col-lg-6 loc">
                    <div>

                    <i class="fas fa-map-marker-alt fa-3x"></i>
                    <span>

                    SAJS

                    </span>
                    <div className="add">
                    Sector 14, Vasundhara, Ghaziabad, Uttar Pradesh - 201012
                    Nearest Metro Station - Vaishali ( Blue Line)

                    </div>
                   


                    </div>
              
                    </div>
            </div>
        </div>
     
    </div>
  );
}

export default Venue;
