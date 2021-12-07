import React,{useState} from 'react';
import TwentyOne from "./datasets/2021.json";
import TwentyTwenty from "./datasets/2020.json";
import TwentyNineteen from "./datasets/2019.json";
import TwentyEighteen from "./datasets/2018.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Hero_Table = () => {
    return (
        <>
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"#d9d9d9"}}>
            <TableCell><b><strong>Year</strong></b></TableCell>
            <TableCell align="left"><b>Player Name</b></TableCell>
            <TableCell align="right"><b>Runs</b></TableCell>
            <TableCell align="right"><b>Average</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell align="left">2021</TableCell>
              <TableCell align="left"><strong>{TwentyOne[0].name}</strong></TableCell>
              <TableCell align="right">{TwentyOne[0].runs}</TableCell>
              <TableCell align="right">{TwentyOne[0].avg}</TableCell>
            </TableRow>
        
            <TableRow>
              <TableCell align="left">2020</TableCell>
              <TableCell align="left"><strong>{TwentyTwenty[0].name}</strong></TableCell>
              <TableCell align="right">{TwentyTwenty[0].runs}</TableCell>
              <TableCell align="right">{TwentyTwenty[0].avg}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">2019</TableCell>
              <TableCell align="left"><strong>{TwentyNineteen[0].name}</strong></TableCell>
              <TableCell align="right">{TwentyNineteen[0].runs}</TableCell>
              <TableCell align="right">{TwentyNineteen[0].avg}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">2018</TableCell>
              <TableCell align="left"><strong>{TwentyEighteen[0].name}</strong></TableCell>
              <TableCell align="right">{TwentyEighteen[0].runs}</TableCell>
              <TableCell align="right">{TwentyEighteen[0].avg}</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
        </div> 
        </>
    )
}

export default Hero_Table
