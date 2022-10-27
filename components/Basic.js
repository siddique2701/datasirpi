import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

function Basic() {
  return (
    <div className="basic-container">
      <Stack className="basic-btn" spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Candidate Name"
            variant="standard"
            helperText="please enter candidate name"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="panelist Name"
            variant="standard"
            helperText="please enter panelist name"
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default Basic;
