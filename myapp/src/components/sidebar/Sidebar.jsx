import React from 'react'
import { useState } from 'react'

import plusicon from "../../asset/plus.png"
import "./sidebar.css"

export default function Sidebar(props) {
  const colors =[
    "#fe9b72" , "#fec971" , "#00d4fe" , "#b693fd" , "#e4ee91"
  ]

  const [isListOpen , setListOpen] =useState(false)
  return (
    <div>
      <div className="sidebar">
      <img src={plusicon} alt="" onClick={()=>setListOpen(!isListOpen)} />
      <ul className={`sidebar-list ${(isListOpen)? "sidebar-list-active" : ""}`}>

          {
            colors.map((item,index)=>  <li  key= {index} 
            className='sidebar-list-item' 
            style={{backgroundColor:item}}
            onClick = {()=>props.Addnote(item)} //this item means color
            />
            )
           

            
          }
        
      </ul>
      </div>
   

    </div>
  )
}
