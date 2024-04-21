import React, { useContext } from 'react'
import notecontext from '../context/notes/notecontext'


function About() {
  const a =useContext(notecontext)
  return (
    <div>
      This is the {a.name}
    </div>
  )
}

export default About
