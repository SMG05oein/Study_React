import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div className="box">
      리엑트{props.count}<br></br>
      {props.content != null ? props.content : "오 개신기해!!"}<br></br>
    </div>
  )
}

export default Box
