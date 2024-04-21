import React, { useContext } from 'react'
import notecontext from "../context/notes/notecontext";


function Noteitem(props) {
    const context = useContext(notecontext)
     const {note,updatenote}=props;
     const {deletenote}=context;
  return (
    <div className='col-md-3 '>
     
    
      <div className="card my-3" >
 
  <div className="card-body">
    <h5 className="card-title"> {note.title}</h5>
    <p className="card-text">  {note.description}</p>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deletenote(note._id); props.showalert("Successfully deleted","success");}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
    
  </div>
</div>
    </div>
  )
}

export default Noteitem
