import React, { useState } from 'react'
function Example({d}) {
  const [car, setCar]=useState("alto")
  //js
  console.log(d);
  const change=(data)=>{
    setCar(data)
  }
  return (
    //jsx
    <div>
      <h1> inside example functional component</h1>
      {d=='hell'?
      <h3>Data shared is :{d}</h3>:
      <h3 style={{color:'red'}}>No data shared</h3>}
      {
        d=='hello all' &&
      
      <h3>Data sharing is:{d}</h3>
}

<h3>My car name is: {car}</h3>
<button onClick={()=>change('swift')}>click</button>
    </div>
  )
}

export default Example