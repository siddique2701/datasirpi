 import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'

function Skills({ formData, setFormData }) {
  return (
    <div className="skills-container">
      <span>Select the all applicable skills</span>
       
        
                <FormControl>
                   <FormGroup row>
                    <FormControlLabel label='Angular4' value='angular4' control={<Checkbox/>}></FormControlLabel>
                    <FormControlLabel label='HTML5' value='html' control={<Checkbox/>}></FormControlLabel>
                    <FormControlLabel label='CSS3' value='css' control={<Checkbox/>}></FormControlLabel> 
                    <FormControlLabel label='Javascript' value='javascript' control={<Checkbox/>}></FormControlLabel>
                   </FormGroup>
                 </FormControl>
             
    </div>
  );
}

export default Skills;
