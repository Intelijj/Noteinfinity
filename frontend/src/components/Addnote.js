import React, { useContext, useState } from 'react'
import notecontext from "../context/notes/notecontext";



function Addnote(props) {
    const context = useContext(notecontext)
    const {addnote}=context;
    const [note, setnote] = useState({title:"",description:"",tag:""})

    const adder=(e)=>{
        e.preventDefault()
        addnote(note.title,note.description,note.tag)
        setnote({title:"",description:"",tag:""})
        props.showalert("added successfully","success")
    }
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
        
    }
  return (
    <div>
        <div className="container my-3">
      <h1>Add a note</h1>
      <form> 
        <div className="mb-3">
          <label for="title" className="form-label">
          title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
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
            value={note.description}
            name='description'
            className="form-control"
            id="description"
          />
        </div>
        <div className="mb-3">
          <label for="tag" className="form-label">
           tag
          </label>
          <input
            type="text"
            onChange={onchange}
            value={note.tag}
            name='tag'
            className="form-control"
            id="tag"
          />
        </div>
       
        <button disabled={note.title.length<3||note.description.length<5} type="submit" className="btn btn-primary" onClick={adder}>
         Add note
        </button>
      </form>
      </div>
      
    </div>
  )
}

export default Addnote
