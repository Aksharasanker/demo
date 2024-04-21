import React, { useState } from 'react'

function Sample() {
    const [userDetails, setUserDeatails]=useState({
        username:"",
        password:"",
        mobile:"",
        state:""

    })
    console.log(userDetails);
  return (
    <div>
        <form action="" className='w-25 border p-3 border-primary rounded ms-5 mb-5'>
            <h3 className='text-center'>Form</h3>
            <input type="text" placeholder='Username' className='form-control' onChange={(e)=>setUserDeatails({...userDetails,username:e.target.value})}/> <br />
            <input type="text" placeholder='Password' className='form-control'onChange={(e)=>setUserDeatails({...userDetails,password:e.target.value})} /> <br />
            <input type="text" placeholder='mobile number' className='form-control'onChange={(e)=>setUserDeatails({...userDetails,mobile:e.target.value})} /> <br />
            <input type="text" placeholder='State'  className='form-control'onChange={(e)=>setUserDeatails({...userDetails,state:e.target.value})} />

            
        </form>
    </div>
  )
}

export default Sample