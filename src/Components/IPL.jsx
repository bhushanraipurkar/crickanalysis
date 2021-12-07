import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./CSS/sample.css";
import Ipl from "./datasets/ipl.json";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { width } from '@mui/system';

 


function IPL() {
  const [team,setTeam]=useState("csk_score");

  const handleplayer1 = (e) => {
    setTeam(e.target.value);
  };

 return (
    <div>
    <div>
      <Grid container>
        <Grid item xs={6} sx={{marginTop:"5%",marginLeft:"10%"}}>
        <FormControl fullWidth style={{width:"40%",marginLeft:"5%"}}>
                    <InputLabel id="demo-simple-select-label">player</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={team}
                      label="Player"
                      onChange={handleplayer1}
                    >
                      {["csk_score","kkr_score","mi_score","pk_score","rcb_score","srh_score"].map((i, num) => {
                        return (
                          <MenuItem value={i}>{i}</MenuItem>
                        )
                      })}
                    </Select>
                    
                  </FormControl>
        </Grid>
      </Grid>
    </div>
    <div style={{height: 320,marginLeft:"-6%"}}>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={Ipl}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
    <linearGradient id="kaccha" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ffff00" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff9900" stopOpacity={0}/>
    </linearGradient>
  </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='Year' />
          <YAxis type="number" domain={[0, 750]} />
          <Tooltip  />
          {/* <Legend /> */}
          <Area type="monotone" dataKey={team} stroke="#ffff00" fillOpacity={1} fill="url(#kaccha)" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default IPL
