import React, { useState, useEffect } from "react";

import axios from "axios";

import { Grid, Typography, TextField, Button } from "@material-ui/core";

const SleepLogForm = () => {
  const [sleepStart, setSleepStart] = useState("");
  const [sleepEnd, setSleepEnd] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/sleep-logs", {
        sleep_start: sleepStart,
        sleep_end: sleepEnd,
        notes: notes,
      })
      .then(() => {
        alert("log submitted successfully!");
      })
      .catch((err) => console.error(err));

    console.log("submitted form!!!");
  };

  useEffect(() => {
    console.log(sleepStart, sleepEnd, notes);
  });

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "20px",
      }}>
      <Typography variant="h6" gutterBottom>
        Sleep Log Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sleepStart"
            name="sleepStart"
            label="Sleep Start"
            type="time"
            defaultValue="22:30"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            onChange={(e) => setSleepStart(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sleepEnd"
            name="sleepEnd"
            label="Sleep End"
            type="time"
            defaultValue="07:15"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            onChange={(e) => setSleepEnd(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="notes"
            name="notes"
            label="Notes"
            aria-label="Add notes here"
            placeholder="Add notes here"
            multiline
            rows="5"
            fullWidth
            variant="outlined"
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SleepLogForm;
