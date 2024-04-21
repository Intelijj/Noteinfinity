import React from 'react'

 function Alert(props) {
  return (
    <div style={{height :'50px'}}>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 {props.alert.type}{props.alert.message}
 
</div>
</div> 
    
  )
}
export default Alert;