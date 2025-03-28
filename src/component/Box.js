//rafce
// import './App.css'; //이건 왜 안 하는거야?
import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title != null ? props.title : "나"}</h1>
      <img className='item-img' src="https://cdn.imweb.me/thumbnail/20200515/f5f09c900eed0.png"/>
      <h2 >승!</h2>
    </div>
  )
}

export default Box
