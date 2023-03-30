import React from 'react';
import Step from '../../components/step/Step';
import './plan.css';

function Plan() {
  return (
    <div className='plan'>
       <Step back2="rgb(164, 232, 209)" bor2="rgb(164, 232, 209)" col2="black" />
       <div className="plancontent">
       <div className="infoHeading">Select Your Plan</div>
        <div className="infoSubHeading">Please Provide Your Name, Email Address and Phone Number</div>
       </div>
    </div>
  )
}

export default Plan