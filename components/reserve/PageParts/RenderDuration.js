import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { UPDATE_DURATION } from '../../../../state/reducers/MakeResReducer';
import { UPDATE_STEP } from '../../../../state/reducers/MakeResReducer';
import '../MakeRes.less';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
  margin: '.75rem 0',
  lineHeight: '25.78px',
  fontSize: '20px',
};

export default function RenderDuration() {
  const dispatch = useDispatch();
  const { duration } = useSelector(state => state.reservation);
  const [selectedDuration, setSelectedDuration] = useState(Number(duration));

  const nextStep = () => {
    dispatch({ type: UPDATE_STEP, payload: 1 });
    dispatch({ type: UPDATE_DURATION, payload: selectedDuration });
  };

  const onDurationChange = e => {
    setSelectedDuration(e.target.value);
  };

  return (
    <>
      <div className="duration-page">
        <div className="radio-box">
          <h1 className="durationH1">
            How much time will you need at the <br /> Community Co-Working
            Space?{' '}
          </h1>

          <div>
            <div className="radio-group">
              <Radio.Group
                onChange={onDurationChange}
                value={selectedDuration}
                id="radio-group"
              >
                <Radio
                  style={radioStyle}
                  value={2}
                  checked={selectedDuration === 2}
                  data-testid="radio-1"
                >
                  1 - 2 Hours
                </Radio>
                <Radio
                  style={radioStyle}
                  value={4}
                  checked={selectedDuration === 4}
                  data-testid="radio-2"
                >
                  3 - 4 Hours
                </Radio>
                <Radio
                  style={radioStyle}
                  value={6}
                  checked={selectedDuration === 6}
                  data-testid="radio-3"
                >
                  6 Hours
                </Radio>
              </Radio.Group>
            </div>
            <div
              data-testid="nextButton"
              className={
                selectedDuration === 0 ? 'radioBtn-inactive' : 'radioBtn-active'
              }
              onClick={selectedDuration === 0 ? null : nextStep}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
