import React, { useEffect, useState } from 'react'
import "./Admin.css"

const Admin = () => {

  const [authorized, setAuthorized] = useState(false)
  const [pin, setPin] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    if (pin.length === 4 && pin === process.env.REACT_APP_ADMIN_PASSWORD) {
      setAuthorized(true)
    }
  }, [pin])

  return (
    <>
      {authorized ?
        <div className='admin'>
          <input type='text' className='event-name' value={eventName} onChange={e => setEventName(e.target.value)} placeholder='event name'/>
          <input type='date' className='event-date' onChange={e => {setEventDate(e.target.value)}} placeholder='event date'/>
          <div className='output' onClick={e => navigator.clipboard.writeText(e.target.innerText)}>
            {eventName.replaceAll(" ","-") +"="+ eventDate.replaceAll("-","!")}
          </div>
        </div>
        :
        <div className='password'>
          <input id="pin" type='text' autoFocus onChange={(e) => setPin(e.target.value)} maxLength={4} />
          <label htmlFor='pin' className='boxes'>
            <div className={`box ${pin.length > 0 && 'box-fill'}`}></div>
            <div className={`box ${pin.length > 1 && 'box-fill'}`}></div>
            <div className={`box ${pin.length > 2 && 'box-fill'}`}></div>
            <div className={`box ${pin.length > 3 && 'box-fill'}`}></div>
          </label>
        </div>
      }
    </>

  )
}

export default Admin