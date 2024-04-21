import React, { useContext, useEffect, useRef, useState } from "react";
import notecontext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";


function Notes(props) {
  const context = useContext(notecontext);
  const { note, getnote,editnote } = context;
  const [note1, setnote] = useState({id:"",etitle:"",edescription:"",etag:""})
let navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')){
    getnote();}
    else{
      navigate("/login")
      
    }
  });
  const ref = useRef(null)
  const refclose = useRef(null)
 
const onchange=(e)=>{
    setnote({...note1,[e.target.name]:e.target.value})
    
}
const adder=(e)=>{
  e.preventDefault()
  editnote(note1.id,note1.etitle,note1.edescription,note1.etag)
  refclose.current.click()
  props.showalert("Updated successfully","success")
  
}

  const updatenote = (currentnote) => {
   
    ref.current.click()
    setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
   
  }
  return (
    <>
      <Addnote showalert={props.showalert}></Addnote>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

     

      <div
        className="modal fade"
        id="exampleModal"
        
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Edit note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form> 
        <div className="mb-3">
          <label for="title" className="form-label">
          title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note1.etitle}
            onChange={onchange}
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            description
          </label>
          <input
            type="text"
            onChange={onchange}
            name='edescription'
            className="form-control"
            value={note1.edescription}
            id="edescription"
          />
        </div>
        <div className="mb-3">
          <label for="tag" className="form-label">
           tag
          </label>
          <input
            type="text"
            onChange={onchange}
            value={note1.etag}
            name='etag'
            className="form-control"
            id="etag"
          />
        </div>
       
        
      </form>

            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                ref={refclose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={adder} className="btn btn-primary">
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {note.map((note) => {
          return (
            <Noteitem key={note._id} updatenote={updatenote} showalert={props.showalert} note={note} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
