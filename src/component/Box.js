//rafce
// import './App.css'; //이건 왜 안 하는거야?
import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title != null ? props.title : "나"}</h1>
      <img className='item-img' src={props.item && props.item.img}/>
      <h2 >{props.result}</h2>
    </div>
  )
}

export default Box
