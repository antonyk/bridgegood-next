import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TIME_SLOT } from '../../../../state/reducers/MakeResReducer';
import { UPDATE_STEP } from '../../../../state/reducers/MakeResReducer';
import '../MakeRes.less';

export default function RenderTimeSlot() {
  const dispatch = useDispatch();
  const { time_slot, duration, room } = useSelector(state => state.reservation);

  const nextStep = () => {
    dispatch({ type: UPDATE_STEP, payload: 2 });
  };

  const timeSlotColOne = [
    { time: '10:00am', value: 10, fourLimit: 0, sixLimit: 0 },
    { time: '11:00am', value: 11, fourLimit: 0, sixLimit: 0 },
    { time: '12:00pm', value: 12, fourLimit: 0, sixLimit: 0 },
    { time: '1:00pm', value: 13, fourLimit: 0, sixLimit: 6 },
  ];
  const timeSlotColTwo = [
    { time: '2:00pm', value: 14, fourLimit: 0, sixLimit: 6 },
    { time: '3:00pm', value: 15, fourLimit: 0, sixLimit: 6 },
    { time: '4:00pm', value: 16, fourLimit: 4, sixLimit: 6 },
    { time: '5:00pm', value: 17, fourLimit: 4, sixLimit: 6 },
  ];

  const isClicked = timeSlotColOne.some(
    timeSlot => timeSlot.value === time_slot
  );
  const isClicked2 = timeSlotColTwo.some(
    timeSlot => timeSlot.value === time_slot
  );

  return (
    <>
      <div
        data-testid="time-picker"
        className={room === 'None' ? 'timeSlotBox-greyOut' : 'timeSlotBox'}
      >
        <div className="row-ts">
          <div className="col-ts">
            <>
              {timeSlotColOne.map((timeSlot, index) => {
                return (
                  <div
                    key={index}
                    value={timeSlot.value}
                    onClick={
                      room === 'None'
                        ? null
                        : timeSlot.sixLimit === duration
                        ? null
                        : timeSlot.fourLimit === duration
                        ? null
                        : () =>
                            dispatch({
                              type: UPDATE_TIME_SLOT,
                              payload: timeSlot.value,
                            })
                    }
                    className={
                      room === 'None'
                        ? 'greyOut'
                        : timeSlot.sixLimit === duration
                        ? 'greyOut'
                        : timeSlot.fourLimit === duration
                        ? 'greyOut'
                        : timeSlot.value === time_slot
                        ? 'tsBtnActive'
                        : 'tsBtn'
                    }
                  >
                    {timeSlot.time}
                  </div>
                );
              })}
            </>
          </div>

          <div className="col-ts">
            <>
              {timeSlotColTwo.map((timeSlot, index) => {
                return (
                  <div
                    key={index}
                    value={timeSlot.value}
                    onClick={
                      room === 'None'
                        ? null
                        : timeSlot.sixLimit === duration
                        ? null
                        : timeSlot.fourLimit === duration
                        ? null
                        : () =>
                            dispatch({
                              type: UPDATE_TIME_SLOT,
                              payload: timeSlot.value,
                            })
                    }
                    className={
                      room === 'None'
                        ? 'greyOut'
                        : timeSlot.sixLimit === duration
                        ? 'greyOut'
                        : timeSlot.fourLimit === duration
                        ? 'greyOut'
                        : timeSlot.value === time_slot
                        ? 'tsBtnActive'
                        : 'tsBtn'
                    }
                  >
                    {timeSlot.time}
                  </div>
                );
              })}
            </>
          </div>
        </div>
        <div
          data-testid="finalize"
          className={
            isClicked || isClicked2 ? 'finalBtn' : 'final-btn-disabled'
          }
          onClick={nextStep}
        >
          Finalize Reservation
        </div>
      </div>
    </>
  );
}
