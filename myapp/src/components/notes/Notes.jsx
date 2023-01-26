import React from 'react'
import deleteicon from "../../asset/delete.png"
import "./notes.css";

let timer = 500,timeout
function Notes(props) {
   const formateDate =(value)=>{
    const date = new Date(value)
    
    const monthNames =[
      "jan" , "feb" , "march" , "april" , "may" , "june",
      "july" , "aug" , "sept" , "oct" , "nov" , "dec" 
    ]

    if(!value) return ""; //agr value he nh hoga tw ksko formate kren g
   
    let hrs = date.getHours()
    let ampm = hrs>12? "PM" : "AM"
    hrs = hrs>12? hrs = 24-hrs : hrs //agr 12 se bary h tw 24 se minus wrnanh
      hrs = hrs === 0 ? "12" : hrs // qk 12 ko 0 dikhata h 
   

    let min = date.getMinutes()
    min = min<10? "0"+min : min
    let day = date.getDate()
    const months = monthNames[date.getMonth()] //ye no return krta h isliye month nameuse
    return `${hrs}:${min} ${ampm} ${day} ${months}`
  
  }
  const debounce =(func)=>{  //ye isliye lgaya tak notes kb update ho seeffect chle pe ye bta sky useeffect ko state kb update ho noteska text update hoe pe
   clearTimeout(timeout)
   timeout=setTimeout(func , timer)
  }

  const updateText = (text,id)=>{
    debounce(()=>props.updateText(text,id))
  }
  return (
    <div className='note' style={{backgroundColor: props.note.color}}>
      <textarea defaultValue={props.note.text} className='note-text'onChange={
        (events)=>updateText(events.target.value,props.note.id)}></textarea>
     <div className="note-footer">
     <p>{formateDate(props.note.time)}</p>
     <img src={deleteicon} alt="" onClick={()=>props.deleteNote(props.note.id)} />
     </div>
    </div>

    
  )
}

export default Notes
