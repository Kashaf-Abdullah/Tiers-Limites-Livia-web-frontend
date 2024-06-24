import React from 'react'

const MainWegcard = (props) => {
  return (
    <div className="box">

    <h5  className='main-weig-head'>{props.head}</h5>
      <p>{props.text}</p>
    </div>
  )
}

export default MainWegcard
