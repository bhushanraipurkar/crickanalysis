import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveFunnel } from '@nivo/funnel'
import _2021_ from "./datasets/2021.json";
import _2020_ from "./datasets/2020.json";
import _2019_ from "./datasets/2019.json";
import _2018_ from "./datasets/2018.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HighlightAltIcon from '@mui/icons-material/CheckBox';
import Grid from '@mui/material/Grid';
import "./CSS/first_analysis.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function First_analysis(){
    const [Name , setName] = useState("RuturajGaikwad");
    const [Runs , setRuns] = useState("635");
    const [Four,setFour] = useState("64");
    const [Six , setSix] = useState("23");
    const [Hundred ,setHundred] = useState("1");
    const [Fifty , setFifty] = useState("4");
    const [Average , setAverage] = useState("45.35");
    const [Innings , setInng] = useState("16");
    const [Matches , setMatches] = useState("16");
   
    
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
       "id": "step_sent",
       "value": Matches,
       "label": "Total Matches"
     },
     {
       "id": "step_viewed",
       "value": Fifty,
       "label": "Total Half Century"
     },
     {
       "id": "step_clicked",
       "value": Hundred,
       "label": "Total Centuries"
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
         <div style={{border:"2px solid #BBC4C2"}}>
       
     <Grid container >
   <Grid item xs={3}>
   <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper',overflow:"scroll" ,height:"750px", overflowX:"hidden"}}>
         {_2021_.map((value, num) => (
          <ListItem button key={num}
          sx={{borderBottom:"1px solid #e6e6e6"}}
          disableGutters
          onClick={(e)=>{setName(value.name);setRuns(value.runs);setFour(value.fours);setSix(value.sixes);setHundred(value.hundred);setFifty(value.fifty_s);setMatches(value.matches);setInng(value.innings);setAverage(value.avg)}}
          >
            <ListItemIcon>
            <HighlightAltIcon sx={{color:'green', marginLeft:"20%"}} />
            </ListItemIcon>
            <ListItemText primary={`${value.name}`} />
          </ListItem>
        ))}
   </List>
   </Grid>
   <Grid item xs={9} >
<div className="parent__div__for__graph">
<Grid container >
        <Grid item xs={6}>
            <div>
            <Card sx={{ minWidth: 240 ,width:350,marginLeft:10,marginTop:10,backgroundColor:'#f2f2f2'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h4>.  .  . ______Player______ .  .  .</h4><br />
        </Typography>
        <Typography variant="h5" component="div" sx={{textAlign:'center',color:"#464033"}}>
        {Name }<br /><br />
        </Typography>
        <Typography variant="body2">
        IPL<span style={{color:"#464033"}}> 2021 </span>data
          <br />
          <p><span style={{color:"black"}}>Winner :</span> Chennai super kings</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://www.iplt20.com/teams/chennai-super-kings/squad/2021" target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          
        <div className="graph__one">
   <ResponsivePie
         data={data}
         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
         innerRadius={0.4}
         padAngle={0.7}
         cornerRadius={3}
         activeOuterRadiusOffset={8}
         borderWidth={1}
         borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor="#333333"
         arcLinkLabelsThickness={2}
         arcLinkLabelsColor={{ from: 'color' }}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
         defs={[
             {
                 id: 'dots',
                 type: 'patternDots',
                 background: 'inherit',
                 color: 'rgba(255, 255, 255, 0.3)',
                 size: 4,
                 padding: 1,
                 stagger: true
             },
             {
                 id: 'lines',
                 type: 'patternLines',
                 background: 'inherit',
                 color: 'rgba(255, 255, 255, 0.3)',
                 rotation: -45,
                 lineWidth: 6,
                 spacing: 10
             }
         ]}
         fill={[
             {
                 match: {
                     id: 'ruby'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'c'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'go'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'python'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'scala'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'lisp'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'elixir'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'javascript'
                 },
                 id: 'lines'
             }
         ]}
         legends={[
             {
                 anchor: 'bottom',
                 direction: 'row',
                 justify: false,
                 translateX: 0,
                 translateY: 56,
                 itemsSpacing: 0,
                 itemWidth: 100,
                 itemHeight: 18,
                 itemTextColor: '#999',
                 itemDirection: 'left-to-right',
                 itemOpacity: 1,
                 symbolSize: 18,
                 symbolShape: 'circle',
                 effects: [
                     {
                         on: 'hover',
                         style: {
                             itemTextColor: '#000'
                         }
                     }
                 ]
             }
         ]}
     />
     </div>

        </Grid><br/>
        <Grid item xs={6}>
          
        <div className="graph__two">
     <ResponsiveFunnel
           data={data2}
           margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
           valueFormat=">-.4s"
           colors={{ scheme: 'spectral' }}
           borderWidth={20}
           labelColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
           beforeSeparatorLength={100}
           beforeSeparatorOffset={20}
           afterSeparatorLength={100}
           afterSeparatorOffset={20}
           currentPartSizeExtension={10}
           currentBorderWidth={40}
           motionConfig="wobbly"
       />
       </div>

        </Grid>
        <Grid item xs={6}>
          
        <div className="graph__three">
   <ResponsivePie
         data={data3}
         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
         innerRadius={0.5}
         padAngle={0.7}
         cornerRadius={3}
         activeOuterRadiusOffset={8}
         borderWidth={1}
         borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor="#333333"
         arcLinkLabelsThickness={2}
         arcLinkLabelsColor={{ from: 'color' }}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
         defs={[
             {
                 id: 'dots',
                 type: 'patternDots',
                 background: 'inherit',
                 color: 'rgba(255, 255, 255, 0.3)',
                 size: 4,
                 padding: 1,
                 stagger: true
             },
             {
                 id: 'lines',
                 type: 'patternLines',
                 background: 'inherit',
                 color: 'rgba(255, 255, 255, 0.3)',
                 rotation: -45,
                 lineWidth: 6,
                 spacing: 10
             }
         ]}
         fill={[
             {
                 match: {
                     id: 'ruby'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'c'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'go'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'python'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'scala'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'lisp'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'elixir'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'javascript'
                 },
                 id: 'lines'
             }
         ]}
         legends={[
             {
                 anchor: 'bottom',
                 direction: 'row',
                 justify: false,
                 translateX: 0,
                 translateY: 56,
                 itemsSpacing: 0,
                 itemWidth: 100,
                 itemHeight: 18,
                 itemTextColor: '#999',
                 itemDirection: 'left-to-right',
                 itemOpacity: 1,
                 symbolSize: 18,
                 symbolShape: 'circle',
                 effects: [
                     {
                         on: 'hover',
                         style: {
                             itemTextColor: '#000'
                         }
                     }
                 ]
             }
         ]}
     />
     </div>

        </Grid>
      </Grid>
   
     </div>
   </Grid>
 </Grid>
         </div>
       </>
     )
   }
   
   export default First_analysis;

   