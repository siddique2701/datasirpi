 import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup,FormLabel } from '@mui/material'

function Scores({ formData, setFormData }) {
  return (
    <div className="scores-container">
        <FormControl>
         <FormLabel className='score-btn-title'>Experience</FormLabel>
         <RadioGroup row> 
           <FormControlLabel value='beginner' control={<Radio/>} label='Beginner'/> 
           <FormControlLabel value='intermediate' control={<Radio/>} label='Intermediate'/> 
           <FormControlLabel value='expert' control={<Radio/>} label='Expert'/> 
         </RadioGroup>
         <FormLabel className='radio-btn-title'>Technology Strength</FormLabel>
         <RadioGroup row> 
           <FormControlLabel value='beginner' control={<Radio/>} label='Beginner'/> 
           <FormControlLabel value='intermediate' control={<Radio/>} label='Intermediate'/> 
           <FormControlLabel value='expert' control={<Radio/>} label='Expert'/> 
         </RadioGroup>
         <FormLabel className='radio-btn-title'>Design Capabilities</FormLabel>
         <RadioGroup row> 
           <FormControlLabel value='beginner' control={<Radio/>} label='Beginner'/> 
           <FormControlLabel value='intermediate' control={<Radio/>} label='Intermediate'/> 
           <FormControlLabel value='expert' control={<Radio/>} label='Expert'/> 
         </RadioGroup>
         <FormLabel className='radio-btn-title'>Leadership Ability</FormLabel>
         <RadioGroup row> 
           <FormControlLabel value='beginner' control={<Radio/>} label='Beginner'/> 
           <FormControlLabel value='intermediate' control={<Radio/>} label='Intermediate'/> 
           <FormControlLabel value='expert' control={<Radio/>} label='Expert'/> 
         </RadioGroup>
       </FormControl>
    </div>
  );
}

export default Scores;