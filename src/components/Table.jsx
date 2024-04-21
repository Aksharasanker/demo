import React, { useState } from 'react'

function Table() {
    const [employee,serEmployee]=useState([{empName:'Ken',empAge:'30',empDesg:'manager'},
    {empName:'Ken',empAge:'30',empDesg:'assosciate'},
    {empName:'priya',empAge:'34',empDesg:'assistant'},
    {empName:'sen',empAge:'21',empDesg:'designer'},
    {empName:'mathew',empAge:'24',empDesg:'developer'},
    {empName:'soniya',empAge:'32',empDesg:'engineer'},
    
])
  return (
    <div>
        <table className='table shadow w-50 ms-5'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>designation</th>
                </tr>
    </thead> 
    <tbody>
        {employee.map((item)=>(
        <tr>
            <td>{item.empName}</td>
            <td>{item.empAge}</td>
            <td>{item.empDesg}</td>
        </tr>
        ))
        }
        </tbody>       
    </table>
    </div>
  )
}
export default Table