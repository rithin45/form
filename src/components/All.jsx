import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const All = () => {
    var[type,settype]=useState({
        value1:'',
        value2:'',
        value3:''
    })
    const deg=(rev)=>{
        const {name,value}=rev.target
        settype({...type,[name]:value})
    }
  return (
    <div>
<Typography>{type.value1}</Typography>
     <TextField label='first name' name='value1' value={type.value1} onChange={deg} ></TextField>
     <br></br>
     <Button variant='contained'>next</Button>
     <br></br>
     <Typography>{type.value2}</Typography>
     <TextField label='middle name' name='value2' value={type.value2} onChange={deg}></TextField>
     <br></br>
     <Button variant='contained'>next</Button>
     <br></br>
     <Typography>{type.value3}</Typography>
     <TextField label='last name' name='value3' value={type.value3} onChange={deg}></TextField>
     <br></br>
     <Button variant='contained'>sign</Button>
     <br></br>
    </div>

  )
}

export default All
