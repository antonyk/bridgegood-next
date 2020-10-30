import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_ROOM } from '../../../../state/reducers/MakeResReducer';
import '../MakeRes.less';

export default function RenderRoomPick() {
  const dispatch = useDispatch();
  const { date, room } = useSelector(state => state.reservation);

  const roomTypes = [
    { type: 'Co-working Room', id: 'da3024b3-ad0d-4bda-b45b-7fcf129ab08a' },
    { type: 'Media Room', id: 'eccfbc02-b0a8-4cb1-ae42-ee1e91e420fe' },
  ];

  return (
    <>
      <div
        data-testid="room-picker"
        className={date === '2011-11-11' ? 'room-box-disabled' : 'room-box'}
      >
        {roomTypes.map((roomType, index) => {
          return (
            <div
              data-testid={
                date === '2011-11-11'
                  ? 'room-disabled'
                  : roomType.type === 'Co-working Room'
                  ? 'room-CoWorking'
                  : 'room-Media'
              }
              key={index}
              onClick={
                date === '2011-11-11'
                  ? null
                  : () =>
                      dispatch({
                        type: UPDATE_ROOM,
                        payload: roomType,
                      })
              }
              value={roomType.type}
              className={
                date === '2011-11-11'
                  ? 'room-btn-disabled'
                  : roomType.type === room
                  ? 'room-btn-active'
                  : 'room-btn'
              }
            >
              {roomType.type}
            </div>
          );
        })}
      </div>
    </>
  );
}
