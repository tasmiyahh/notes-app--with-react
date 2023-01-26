

import Notecontainer from './components/notecontainer/Notecontainer';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
function App() {
  const [notes , setnotes]= useState(JSON.parse(localStorage.getItem("notesapp")) || []) //jb kch nh start me tw empty baad me store kren g

 

  const addnote=(color)=>{
    const temporaryNotes =[...notes]  //for note state modification liye temporary note bnana pary gga direct modification nh krskty
    temporaryNotes.push({
      id : Date.now()+ "" + Math.floor(Math.random()*78) , //date mili sec me mili hum ne uniquue kliye math random dala wo pointsme deta h isliye floor lgaya ,unique key kliye lgaya
      text : "", 
      time : Date.now(),
      color : color  //uperwala color
    })
  
   
  
    
      setnotes(temporaryNotes)
    
  }

  const deleteNote =(id)=>{
   const temporaryNotes = [...notes]

   const index = temporaryNotes.findIndex(item=> item.id === id)

   if(index < 0) return; //index nh mila
   temporaryNotes.splice(index , 1)
   setnotes(temporaryNotes)
  }

  useEffect(()=>{
  localStorage.setItem("notesapp" ,JSON.stringify(notes)) //notes save krne kliye
  },[notes])

const updateText =(text,id)=>{
  const temporaryNotes = [...notes]

  const index = temporaryNotes.findIndex(item=> item.id === id)

  if(index < 0) return; //index nh mila


  temporaryNotes[index].text=text
  setnotes(temporaryNotes)
}
  return (
    <div className="App">
        {/* function prop */}
      <Sidebar Addnote={addnote}/>  
    
      <Notecontainer notes={notes} deleteNote={deleteNote}
      updateText={updateText}/>

    </div>
  );
}

export default App;
