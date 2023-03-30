import React from 'react';
import Step from '../../components/step/Step';
import "./info.css";
import { Link } from 'react-router-dom';

function Info() {
  const handlesubmit=()=>{
    console.log("hi")
  }
  return (
    <div className='infoPage'>
      <Step back1="rgb(164, 232, 209)" bor1="rgb(164, 232, 209)" col1="black" />
      <div className="infoContent">
        <div className="infoHeading">Personal Info</div>
        <div className="infoSubHeading">Please Provide Your Name, Email Address and Phone Number</div>
        <form className='formitem' onSubmit={handlesubmit}>
          <label htmlFor="Name">Name</label><br />
          <input type="text" placeholder='eg:- Md Mobashir' /><br />
          <label htmlFor="Name">Email Address</label><br />
          <input type="text" placeholder='eg:- mobashir@gmail.com' /><br />
          <label htmlFor="Name">Phone Number</label><br />
          <input type="text" placeholder='eg:- 9155395918' /><br />
          <Link to="/plan"><button type='submit' className='submitbutton'>NEXT STEP</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Info