import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import _2021_ from "./datasets/2021.json";
import _2020_ from "./datasets/2020.json";
import _2019_ from "./datasets/2019.json";
import _2018_ from "./datasets/2018.json";
import Grid from '@mui/material/Grid';
import "./CSS/first_analysis.css";
import { linearGradientDef } from '@nivo/core'
import Ipl from "./IPL";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function Fourth_Analysis(){
    const [Name , setName] = useState("KaneWilliamson");
    const [Runs , setRuns] = useState("735");
    const [Four,setFour] = useState("64");
    const [Six , setSix] = useState("28");
    const [Hundred ,setHundred] = useState("0");
    const [Fifty , setFifty] = useState("8");
    const [Average , setAverage] = useState("52.5");
    const [Innings , setInng] = useState("17");
    const [Matches , setMatches] = useState("17");
   
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
  
  
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
           {_2018_.map((value, num) => (
            <ListItem button key={num}
            disableGutters
            onClick={(e)=>{setName(value.name);setRuns(value.runs);setFour(value.fours);setSix(value.sixes);setHundred(value.hundred);setFifty(value.fifty_s);setMatches(value.matches);setInng(value.innings);setAverage(value.avg)}}
            >
              <ListItemText style={{textAlign:"center"}} primary={`${value.name}`} />
            </ListItem>
          ))}
     </List>
        </Box>
      );

   const data =[
     {
       "id": "Total Six",
       "label": "Total Six",
       "value": Six,
       "color": "hsl(166, 70%, 50%)"
     },
     {
       "id": "Total Four",
       "label": "Total Four",
       "value": Four,
       "color": "hsl(100, 70%, 50%)"
     },
     {
       "id": "Total Runs",
       "label": "Total Runs",
       "value": Runs,
       "color": "hsl(16, 70%, 50%)"
     }
   ]
   
   const data2 =[
    {
      "id": "Total Matches",
      "label": "Total Matches",
      "value": Matches,
      "color": "hsl(166, 70%, 50%)"
    },
    {
      "id": "Total Half Century",
      "label": "Total Half Century",
      "value": Fifty,
      "color": "hsl(100, 70%, 50%)"
    },
    {
      "id": "Total Centuries",
      "label": "Total Centuries",
      "value": Hundred,
      "color": "hsl(16, 70%, 50%)"
    }
  ]

   const data3 =[
     {
       "id": "Average Run",
       "label": "Average Run",
       "value": Average,
       "color": "hsl(166, 70%, 50%)"
     },
     {
       "id": "Total Innings",
       "label": "Total Innings",
       "value": Innings,
       "color": "hsl(100, 70%, 50%)"
     },
     {
       "id": "Total Matches",
       "label": "Total Matches",
       "value": Matches,
       "color": "hsl(16, 70%, 50%)"
     }
   ]
   
     return (
        <>
         


        <div>
  <Grid container>
        {/* <Grid item xs={2}>


        <List className="list__list" sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper',overflow:"scroll" ,position:"relative",height:"660px", overflowX:"hidden"}}>
        {_2021_.map((value, num) => (
         <ListItem className="list__list__list" button key={num}
         disableGutters
         onClick={(e)=>{setName(value.name);setRuns(value.runs);setFour(value.fours);setSix(value.sixes);setHundred(value.hundred);setFifty(value.fifty_s);setMatches(value.matches);setInng(value.innings);setAverage(value.avg)}}
         >
           {/* <ListItemIcon>
           <HighlightAltIcon sx={{color:'green', marginLeft:"20%"}} />
           </ListItemIcon> */}
           {/* <ListItemText primary={`${value.name}`} />
         </ListItem>
       ))}
  </List> */}



        {/* </Grid> */} 
        <Grid item xs={12}>
          <Grid container>
           <Grid item xs={7}><Ipl/></Grid>
           <Grid item xs={5}>

           <div className="right__division">
             <h1>{Name}</h1><br/><br/>
             <p>2018 Year data</p>
             <p>Winner team - <strong>Chennai Super Kings</strong></p>
             <p>Total run in 2018 is {Runs}</p>
             <p>Average Runs-<strong> {Average}</strong></p>
             <p>Total <strong>{Hundred}</strong> century <strong>{Name} </strong>scored in 2018.</p>
             <div>
             

<Button className="button" onClick={toggleDrawer("left", true)}><h5 style={{color:"black"}}>Choose Player</h5></Button>
         <Drawer
           anchor="left"
           open={state["left"]}
           onClose={toggleDrawer('left', false)}
         >
           {list("left")}
         </Drawer>


             </div>
           </div>



           </Grid>
          </Grid>
          <Grid container>
            <Grid item style={{marginLeft:"3%"}}>
              
            <div  className="graph__one">
            <h5>Runs , Sixes , Fours</h5>
  <ResponsivePie
        data={data}
        keys={["Total Six","Total Four","Total Runs"]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.65}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={0.4}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
           // using helpers
           // will inherit colors from current element
            linearGradientDef('gradientA', [
                { offset: 0, color: '#f2f2f2' },
                { offset: 100, color: '#bfbfbf' },
            ]),
           // linearGradientDef('gradientB', [
           //     { offset: 0, color: '#000' },
           //     { offset: 100, color: 'inherit' },
           // ]),
           // using plain object
           {
               id: 'gradientQ',
               type: 'linearGradient',
               colors: [
                   { offset: 0, color: '#ff99c2' },
                   { offset: 100, color: '#e6005c' },
               ],
           },
           {
             id: 'gradientD',
             type: 'linearGradient',
             colors: [
                 { offset: 0, color: 'red' },
                 { offset: 100, color: 'green' },
             ],
         },
       ]}
        fill={[
            // match using object query
            { match: { id: 'Total Runs' }, id: 'gradientQ' },
            // match using function
            { match: d => d.id === 'vue', id: 'gradientB' },
            // match all, will only affect 'elm', because once a rule match,
           // others are skipped, so now it acts as a fallback
            { match:'*', id: 'gradientA' },
        ]}


       
    />
    
    </div>
              
              
               </Grid>
            <Grid item sx={{marginLeft:"3%"}}>
              
              
              
            <div className="graph__one">
    <h5>Canturies and Matches</h5>
    <ResponsivePie
     data={data2}
     keys={"Total Matches","Total Half Century","Total Centuries"}
     margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
     innerRadius={0.65}
     padAngle={2}
     cornerRadius={3}
     activeOuterRadiusOffset={8}
     borderWidth={1}
     borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
     arcLinkLabelsSkipAngle={10}
     arcLinkLabelsTextColor="#333333"
     arcLinkLabelsThickness={2}
     arcLinkLabelsColor={{ from: 'color' }}
     enableArcLinkLabels={false}
     enableArcLabels={false}
     arcLabelsSkipAngle={10}
     arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
     defs={[
        // using helpers
        // will inherit colors from current element
        linearGradientDef('gradientA', [
         { offset: 0, color: '#f2f2f2' },
         { offset: 100, color: '#bfbfbf' },
     ]),
        linearGradientDef('gradientB', [
            { offset: 0, color: '#000' },
            { offset: 100, color: 'inherit' },
        ]),
        // using plain object
        {
         id: 'gradientC',
         type: 'linearGradient',
         colors: [
             { offset: 0, color: '#ffff00' },
             { offset: 100, color: '#ff9900' },
         ],
     },
    ]}
    fill={[
        // match using object query
        { match: { id: 'Total Matches' }, id: 'gradientC' },
        // match using function
        { match: d => d.id === 'vue', id: 'gradientB' },
        // match all, will only affect 'elm', because once a rule match,
        // others are skipped, so now it acts as a fallback
        { match: '*', id: 'gradientA' },
    ]}
     
 />


   </div>
              
               </Grid>
            <Grid item sx={{marginLeft:"3%"}}>
              
            <div className="graph__one">
            <h5>Average</h5>
  <ResponsivePie
        data={data3}
        keys={"Average Run","Total Innings","Total Matches"}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.65}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
           // using helpers
           // will inherit colors from current element
           linearGradientDef('gradientA', [
             { offset: 0, color: '#f2f2f2' },
             { offset: 100, color: '#bfbfbf' },
         ]),
           linearGradientDef('gradientB', [
               { offset: 0, color: '#000' },
               { offset: 100, color: 'inherit' },
           ]),
           // using plain object
           {
             id: 'gradientR',
             type: 'linearGradient',
             colors: [
                 { offset: 0, color: '#80bfff' },
                 { offset: 100, color: '#0073e6' },
             ],
         },
       ]}
       fill={[
           // match using object query
           { match: { id: 'Average Run' }, id: 'gradientR' },
           // match using function
           { match: d => d.id === 'vue', id: 'gradientB' },
           // match all, will only affect 'elm', because once a rule match,
           // others are skipped, so now it acts as a fallback
           { match: '*', id: 'gradientA' },
       ]}
       
    />
    </div>
              
              
              </Grid>
          </Grid>
        </Grid>
  </Grid>
</div>


      </>
   )}
   
   export default Fourth_Analysis;

   