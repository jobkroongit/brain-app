import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
   return (
      <Tilt>
         <div className="pa3 ma6 mt0 br3 dim shadow-4 link pointer " style={{ height: '150px', width:'150px', backgroundColor: 'white' }}>
            <img style={{ paddingTop: '8px' }} src={brain} alt='Brain Logo'></img>
         </div>
      </Tilt>
   );
}

export default Logo;