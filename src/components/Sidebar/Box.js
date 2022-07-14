import React from 'react'
import style from "./Sidebar.module.scss";


const Box = (props) => {

  return (
    <div className={style.box}>
        {props.img}
        {props.name}
    </div>
  )
}

export default Box