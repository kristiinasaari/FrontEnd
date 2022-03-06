import React from "react";
import { TextField, Typography, Slider, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Switch } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {
  return (
    <Box sx={{ width: 600, padding: 2 }}>
      <TextField label='Nimi' name='nimi' variant='outlined' fullWidth />
      <Typography>Arvosana</Typography>
      <Slider 
        aria-label="Arvosana"
        defaultValue={2.5}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={6}
        marks
        min={0}
        max={5}
        marks={marks}
      />
      <Stack spacing={2} direction="row">
        <Typography>Suosittelen</Typography>
        <Switch {...label} defaultChecked />
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined">LISÄÄ</Button>
        <Button variant="outlined" color="secondary">PERUUTA</Button>
      </Stack>
    </Box>
  );
}

export default App;
