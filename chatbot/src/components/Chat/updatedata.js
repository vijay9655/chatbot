import React, { useState,useEffect, Component } from 'react'

function Updatedata({names}) {
    const [data, setData] = useState({
        name:''
    })
    useEffect(() => {
      
    //   const {Name}=steps
      setData({'name':names})
    console.log(names);
     
    }, [names])
    
  return (
    <div>
        
        
        </div>
  )
}

export default Updatedata