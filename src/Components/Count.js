import React,{useState} from 'react'

function Count() {
    const [count,setCount] = useState(0);
    let Counter = () =>{
        // count=count+1; // can't allow by react we have to use setCount function instead
        setCount(count+1);
        // console.log("button clicked ",{count});
    }
  return (
    <>
    <div className='container' >
    <h1 className='text-danger'>Counter</h1>
    <h5 >When you clicked on the button then counter display number of times till now you clicked</h5>
    <div>
      <p className='p-3 bg-info bg-opacity-10 border border-info rounded'>You clicked {count} times</p>
      <button type="button" class="btn btn-outline-success" onClick={Counter}>Click Me</button>
      <button type="button" class="btn btn-outline-danger mx-2" onClick={()=>{
        setCount(0);
        alert("Reset successful");
      }}>Reset</button>

    </div>
    </div>
   
    </>
  )
}

export default Count
