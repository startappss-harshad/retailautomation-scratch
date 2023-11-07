import { Button, TextField } from "@mui/material";
import React, {  } from "react";

const Date = ({fromDate, toDate}) => {
 
 
  return (
    <div className="datepage">
      <span className="datetag">From </span>
      <TextField
        type="date"
        id="outlined-basic"
        variant="outlined"
        onChange={fromDate}
      />
      <span className="datetag"> To </span>

      <TextField
        type="date"
        id="outlined-basic"
        variant="outlined"
        onChange={toDate}
      />

      <Button variant="contained" color="success">
        Go
      </Button>
    </div>
  );
};

export default Date;
