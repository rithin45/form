import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Validation = () => {
    var[pan,setpan]=useState({
        value1:''

    })
    const ret=(r)=>{
        const {name,value}=r.target
        setpan({...pan,[name]:value})
        console.log(pan)
    }
  return (
    <div>
      <form>
         <TextField label='first name' name='value1' value={pan.value1} onChange={ret}></TextField>
         <br></br>
         <Button variant='contained'>next</Button>
      </form>
    </div>
  )
}

export default Validation
