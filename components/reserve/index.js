import React, { useState } from 'react'
import { Steps, Calendar } from 'antd'

import moment from 'moment'
// import RenderCalendar from './PageParts/RenderCalendar';
// import RenderRoomPick from './PageParts/RenderRoomPick';
// import RenderTimeSlot from './PageParts/RenderTimeSlot';
// import ResSteps from './PageParts/RenderResSteps';
// import RenderDuration from './PageParts/RenderDuration';
// import RenderFinalizeRes from './PageParts/RenderFinalizeRes';
import './index.less'

// const resState = {
//   user: 'TestUser',
//   reservations: [],
//   duration: 0, // 1-2 hours, 3-4 hours, 6 hours
//   date: '2011-11-11', //'Any present or future date'
//   room: 'None', // 'CoWorker or Media'
//   roomId: '',
//   time_slot: 'None', // Examples of times 10,11,12,13,14,15,16,17 (10am - 5pm)
//   currentStep: 0, // 0-2 (Pick time), (date/ room/ time slot), (finalize/ donate)
//   donation: 0, // 1, 5, 10, 20, Other Amount
//   isFetchingData: false,
//   isPostingData: false,
//   isDeletingData: false,
//   error: '',
// }

const roomTypes = [
  { type: 'Co-working Room', id: 'da3024b3-ad0d-4bda-b45b-7fcf129ab08a' },
  { type: 'Media Room', id: 'eccfbc02-b0a8-4cb1-ae42-ee1e91e420fe' },
]

const timeSlotColOne = [
  { time: '10:00am', value: 10, fourLimit: 0, sixLimit: 0 },
  { time: '11:00am', value: 11, fourLimit: 0, sixLimit: 0 },
  { time: '12:00pm', value: 12, fourLimit: 0, sixLimit: 0 },
  { time: '1:00pm', value: 13, fourLimit: 0, sixLimit: 6 },
]

const timeSlotColTwo = [
  { time: '2:00pm', value: 14, fourLimit: 0, sixLimit: 6 },
  { time: '3:00pm', value: 15, fourLimit: 0, sixLimit: 6 },
  { time: '4:00pm', value: 16, fourLimit: 4, sixLimit: 6 },
  { time: '5:00pm', value: 17, fourLimit: 4, sixLimit: 6 },
]

export default function ResContainer() {
  const [currentStep, setCurrentStep] = useState(0)
  const [room, setRoom] = useState('None')
  const [roomId, setRoomId] = useState('')
  // const [date, setDate] = useState(Date.now()) //  moment().format('YYYY-MM-DD')
  const [date, setDate] = useState(null) //  moment().format('YYYY-MM-DD')
  const [duration, setDuration] = useState(0)
  const [timeSlot, setTimeSlot] = useState('None')

  function onCalendarSelect(value) {
    // try this
    console.log(value)
    const dateStr = value.format('YYYY-MM-DD')
    if (dateStr >= moment().format('YYYY-MM-DD')) setDate(dateStr)
  }
  function onRoomClick(value) {
    if (date !== '2011-11-11') {
      setRoom(value.type)
      setRoomId(value.id)
    }
  }

  //   const { currentStep, room, date } = useSelector(state => state.reservation);
  function setStep(value) {
    switch (value) {
      case 1:
        setCurrentStep(0)
        break
      case 2:
        if (duration !== undefined) setCurrentStep(1)
        break
      case 3:
        if (timeSlot !== 'None') setCurrentStep(2)
        break
      default:
        break
    }
  }

  const nextStep = () => {
    setCurrentStep(2)
  }

  const isClicked = timeSlotColOne.some((ts) => ts.value === timeSlot)
  const isClicked2 = timeSlotColTwo.some((ts) => ts.value === timeSlot)

  function onTimeSlotClick(value) {
    if (
      room !== 'None' &&
      value.sixLimit !== duration &&
      value.fourLimit !== duration
    )
      setTimeSlot(value)
  }

  return (
    <>
      <div className="steps-box">
        <div className="steps">
          <Steps data-testid="steps" current={currentStep}>
            <Steps.Step data-testid="step-one" onClick={() => setStep(1)} />
            <Steps.Step data-testid="step-two" onClick={() => setStep(2)} />
            <Steps.Step data-testid="step-three" onClick={() => setStep(3)} />
          </Steps>
          <div className="step-def">
            <div onClick={() => setStep(1)} className="step-1">
              Select Time
            </div>
            <div onClick={() => setStep(2)} className="step-2">
              Fill Reservation Info
            </div>
            <div onClick={() => setStep(3)} className="step-3">
              Donate & Complete Reservation
            </div>
          </div>
          <p></p>
        </div>
      </div>

      <div className="big-box">
        <div className="row">
          <div className="col-1 col">
            <h2>Select a Date</h2>
            <div className="components">
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
                  onSelect={onCalendarSelect}
                  default={false}
                />
              </div>
              <h3>
                {date === null || date < moment().format('YYYY-MM-DD')
                  ? 'Please choose a possible date'
                  : null}
              </h3>
            </div>
          </div>

          <div className="col-2 col">
            <h2
              className={
                date === null || date < moment().format('YYYY-MM-DD')
                  ? 'h2-grey'
                  : null
              }
            >
              Select a Room
            </h2>
            <div className="components">
              <div
                data-testid="room-picker"
                className={
                  date === '2011-11-11' ? 'room-box-disabled' : 'room-box'
                }
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
                      onClick={() => onRoomClick(roomType)}
                      value={roomType.type}
                      className={
                        date === null || date < moment().format('YYYY-MM-DD')
                          ? 'room-btn-disabled'
                          : roomType.type === room
                          ? 'room-btn-active'
                          : 'room-btn'
                      }
                    >
                      {roomType.type}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-3 col">
            <h2 className={room === 'None' ? 'h2-grey' : null}>
              Select Opening
            </h2>
            <div className="components">
              <div
                data-testid="time-picker"
                className={
                  room === 'None' ? 'timeSlotBox-greyOut' : 'timeSlotBox'
                }
              >
                <div className="row-ts">
                  <div className="col-ts">
                    <>
                      {timeSlotColOne.map((item, index) => {
                        return (
                          <div
                            key={index}
                            value={item.value}
                            onClick={() => onTimeSlotClick(item)}
                            className={
                              room === 'None'
                                ? 'greyOut'
                                : item.sixLimit === duration
                                ? 'greyOut'
                                : item.fourLimit === duration
                                ? 'greyOut'
                                : item.value === timeSlot
                                ? 'tsBtnActive'
                                : 'tsBtn'
                            }
                          >
                            {item.time}
                          </div>
                        )
                      })}
                    </>
                  </div>

                  <div className="col-ts">
                    <>
                      {timeSlotColTwo.map((item, index) => {
                        return (
                          <div
                            key={index}
                            value={item.value}
                            onClick={
                              room === 'None'
                                ? null
                                : item.sixLimit === duration
                                ? null
                                : item.fourLimit === duration
                                ? null
                                : () => setTimeSlot(item.value)
                            }
                            className={
                              room === 'None'
                                ? 'greyOut'
                                : item.sixLimit === duration
                                ? 'greyOut'
                                : item.fourLimit === duration
                                ? 'greyOut'
                                : item.value === timeSlot
                                ? 'tsBtnActive'
                                : 'tsBtn'
                            }
                          >
                            {item.time}
                          </div>
                        )
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
            </div>
          </div>
        </div>
      </div>
    </>
  )

  //   if (currentStep === 1) {

  //   } else if (currentStep === 2) {
  //     return (
  //       <>
  //         <div className="steps-box">
  //           <div className="steps">
  //             <ResSteps />
  //           </div>
  //         </div>
  //         <RenderFinalizeRes />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <div className="steps-box">
  //           <div className="steps">
  //             <ResSteps />
  //           </div>
  //         </div>

  //         <RenderDuration />
  //       </>
  //     );
  //   }
}
