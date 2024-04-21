import React, { useState } from "react";
import notecontext from "./notecontext";


const Notesstate=(props)=>{
  const host ="https://noteinfinitybackend.vercel.app"
    const initialnotes=[ ]

 const [note, setnote] = useState(initialnotes)
//get all a note 
const getnote=async()=>{
  //api call 
  const response = await fetch(`${host}/api/notes/fetchnotes`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      "checktoken":localStorage.getItem('token')
     
    },
    
  });
  const json = await response.json(); 
  setnote(json)
 


}


// add a note 
const addnote=async(title,description,tag)=>{
  //api call 
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "checktoken":localStorage.getItem('token')
     
    },
    
    body: JSON.stringify({title,description,tag}), 
  });

const noter = await response.json();
  setnote(note.concat(noter))

}
// delete a note 
const deletenote=async(id)=>{
  //api call
  // eslint-disable-next-line
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
      "checktoken":localStorage.getItem('token')
     
    },
    
   
  });


    const newnotes=note.filter((note)=>{return note._id!==id})
    setnote(newnotes)
    
}
// edit a note 
const editnote= async (id,title,description,tag)=>{
//api call 
// eslint-disable-next-line
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
      "checktoken":localStorage.getItem('token')
     
    },
    
    body: JSON.stringify({title,description,tag}), 
  });


let newnotes=  JSON.parse(JSON.stringify(note))

  for (let index = 0; index < newnotes.length; index++) {
    const element=newnotes[index];
    if(element._id===id){
     
      newnotes[index].title=title;
      newnotes[index].description=description;
      newnotes[index].tag=tag;
      break;

    }
    setnote(newnotes) 

    
  }
    
}




    return (
        <notecontext.Provider value={{note,addnote,deletenote,editnote,getnote}}>
           { props.children}
        </notecontext.Provider>
    )

}  
export default Notesstate;