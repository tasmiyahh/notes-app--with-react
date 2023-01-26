
import React from 'react'
import Notes from '../notes/Notes'

import "./notecontainer.css"


function Notecontainer(props) {
  const reversearray = (arr)=>{ //new notes ko pehly show krne kliyr
   const array = []

   for(let i = arr.length -1; i >=0 ; --i ){
    array.push(arr[i]);
   }
   return array
  }

  const notes =reversearray(props.notes) //props.notes ko reverse array medaal k storekrdiya notes var me
    return (
        <div className='note-container'>
            <h2>Notes</h2>
            <div className="note-container-notes custom-scroll">
            {
              notes?.length>0 ?  //jb kch na ho tw oskliye
                notes.map((item,index)=><Notes 
                key = {item.id} note={item} //agr index dety h tw new nots mepurana text ata unique kliye id d
                deleteNote ={props.deleteNote}
                updateText ={props.updateText} />) //yahan refernced h function ki isliye arrow function nh diyacal k wqt dety h
               : <h2>No Notes Presents</h2>
            }
            </div>

        </div>
    )
}

export default Notecontainer
