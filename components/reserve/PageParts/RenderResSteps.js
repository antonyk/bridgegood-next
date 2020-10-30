import React from 'react';
import { Steps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_STEP } from '../../../../state/reducers/MakeResReducer';

const { Step } = Steps;

export default function ResSteps() {
  const dispatch = useDispatch();
  const { currentStep, duration, time_slot } = useSelector(
    state => state.reservation
  );

  const stepOne = () => {
    dispatch({ type: UPDATE_STEP, payload: 0 });
  };

  const stepTwo = () => {
    if (duration === undefined) {
      return null;
    } else {
      dispatch({ type: UPDATE_STEP, payload: 1 });
    }
  };

  const stepThree = () => {
    if (time_slot === 'None') {
      return null;
    } else {
      dispatch({ type: UPDATE_STEP, payload: 2 });
    }
  };

  return (
    <>
      <Steps data-testid="steps" current={currentStep}>
        <Step data-testid="step-one" onClick={stepOne} />
        <Step data-testid="step-two" onClick={stepTwo} />
        <Step data-testid="step-three" onClick={stepThree} />
      </Steps>
      <div className="step-def">
        <div onClick={stepOne} className="step-1">
          Select Time
        </div>
        <div onClick={stepTwo} className="step-2">
          Fill Reservation Info
        </div>
        <div onClick={stepThree} className="step-3">
          Donate & Complete Reservation
        </div>
      </div>
      <p></p>
    </>
  );
}
