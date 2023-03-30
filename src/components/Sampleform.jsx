import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[rev,setrev]=useState();
    const rithul=(v)=>{
    setrev(v.target.value)
    console.log(rev)
    }
    var[ele,setele]=useState();
    const anu=(r)=>{
    setele(r.target.value)
    console.log(ele)
    }
  return (
    <div>
        <Typography>{rev}</Typography>
      <TextField variant='outlined' label='firstname' onChange={rithul}/>
      <br></br>
      <Typography>{ele}</Typography>
      <br></br>
      <TextField variant='outlined' label='password' onChange={anu}/>
      <br></br>
      <Button variant='contained'>sign</Button>

    </div>
  )
}

export default Sampleform
