import React from 'react';
import moment from 'moment';
import { Calendar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATE } from '../../../../state/reducers/MakeResReducer';

export default function RenderCalendar(props) {
  const dispatch = useDispatch();
  const { date } = useSelector(state => state.reservation);

  const currentDate = moment().format('YYYY-MM-DD');
  console.log(currentDate);

  function onSelectChange(value) {
    dispatch({ type: UPDATE_DATE, payload: value.format('YYYY-MM-DD') });
  }

  return (
    <>
      <div
        data-testid="calendar"
        style={{
          width: 500,
          border: '1px solid #4E4E4E',
          paddingBottom: '4rem',
        }}
      >
        <Calendar
          fullscreen={false}
          onSelect={onSelectChange}
          default={false}
        />
      </div>
      <h3>{date < currentDate ? 'Please choose a possible date' : null}</h3>
    </>
  );
}
