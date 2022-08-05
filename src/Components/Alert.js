import React from 'react'

export default function Alert(props) {
  return (
     // props.alert is evaluted first if it is empty then after && statement not checked 
    // as soon as we set message using setAlert then it is executed
    <div style={{height: '50px'}}>
  
  {props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success !</strong>{props.alert}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
    
  )
}
