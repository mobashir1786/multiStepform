import React from 'react';
import "./step.css";

function Step(props) {
    return (
        <div className='steps'>
            <div className="step step1">
                <div className="stepNumber" style={{backgroundColor:props.back1,border:props.bor1,color:props.col1}}>1</div>
                <div className="stepstatus">
                    <div className="stepStatusNo">STEP1</div>
                    <div className="stepStatuswork">YOUR INFO</div>
                </div>
            </div>
            <div className="step step2">
                <div className="stepNumber"style={{backgroundColor:props.back2,border:props.bor2,color:props.col2}}>2</div>
                <div className="stepstatus">
                    <div className="stepStatusNo">STEP2</div>
                    <div className="stepStatuswork">SELECT PLAN</div>
                </div>
            </div>
            <div className="step step3">
                <div className="stepNumber" style={{backgroundColor:props.back3,border:props.bor3,color:props.col3}}>3</div>
                <div className="stepstatus">
                    <div className="stepStatusNo">STEP3</div>
                    <div className="stepStatuswork">ADD-ONS</div>
                </div>
            </div>
            <div className="step step4">
                <div className="stepNumber" style={{backgroundColor:props.back4,border:props.bor4,color:props.col4}}>4</div>
                <div className="stepstatus">
                    <div className="stepStatusNo">STEP4</div>
                    <div className="stepStatuswork">SUMMARY</div>
                </div>
            </div>
        </div>
    )
}

export default Step