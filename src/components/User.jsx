import React, { useState } from 'react'
function User({uname,uage}) {
  const [color , setColor]= useState({
    color1:'red',
    color2:'orange',
    color3:'green'
  })
    
  
  //js
  //console.log()
  const handleClick=()=>{
    alert('Button clicked')
  }
  const add=(user)=>{
    console.log(`${user} added successfully`);
  }

  const getEmail=(e)=>{
    console.log(e.target.value);

  }
  const Change =(data)=>{
    setColor({...color,color3:data})

  }
  return (
    <div>
      <h3>Username:{uname}</h3>
      <h3>Age:{uage}</h3>
      <button onClick={handleClick}>click</button>
    <button onClick={()=>add('maxwell')}>submit</button> <br/> <br/>
  <input type="email" placeholder='email id' onChange={(e) =>getEmail(e)}/>
  <h1>Available color</h1>
  <ul>
    <li>{color.color1}</li>
    <li>{color.color2}</li>
    <li>{color.color3}</li>
  </ul>
  <button onClick={()=>Change('yellow')}>color change</button>
    </div>
  )
}

export default User