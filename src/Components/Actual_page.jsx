import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { styled } from '@mui/material/styles';
import player__name from "./Player_name.json";
import FormHelperText from '@mui/material/FormHelperText';
import NativeSelect from '@mui/material/NativeSelect';
import CGraph from "./Comparison_Graph";
import Hero_Table from './Hero_Table';
import First from "./2021_Analysis";
import Two from "./2020_Analysis";
import Three from "./2019_Analysis";
import Four from "./2018_Analysis";
import "./CSS/index.css";
import Cool from "./Cool_preview";
import Aos from "aos";
import "aos/dist/aos.css";
import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Api from './Api';
import Tester from "./2021_Analysis copy";
import DownloadingIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const Actual_page = () => {
  const [player1, setPlayer1] = useState('M.S. dhoni');
  const [player2, setPlayer2] = useState('Virat Kohli');
  const [Year, setYear] = useState("2019");
  const [value, setValue] = useState(0);

  const [open, toggle] = useState(false)
const [ref, { width }] = useMeasure()
const props = useSpring({ width: open ? width : 0 })


  const handleChange = (e) => {
    setPlayer2(e.target.value);
  };
  const handleplayer1 = (e) => {
    setPlayer1(e.target.value);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 }); //2000 = 2 sec  
  });
  return (
    <div className="index__div">
      <br /><br />
      <div className="heading__info" data-aos="fade-right">
        <h1>Cricket Analysis <span className="heading__info__1">and API</span></h1>
        <p style={{color:"#d9d9d9"}}>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a
          wicket at each end, each comprising two bails balanced on three stumps. The game proceeds when a player on the fielding team, called the bowler,
          "bowls" (propels) the ball from one end of the pitch towards the wicket at the other end. The batting side's players score runs by striking the
          bowled ball with a bat and running between the wickets, while the bowling side tries to prevent this by keeping the ball within the field and
          getting it to either wicket, and dismiss each batter (so they are "out"). Means of dismissal include being bowled, when the ball hits the stumps
          and dislodges the bails, and by the fielding side either catching a hit ball before it touches the ground, or hitting a wicket with the ball before
          a batter can cross the crease line in front of the wicket to complete a run. When ten batters have been dismissed, the innings ends and the teams
          swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches.Go <a href="https://en.wikipedia.org/wiki/Cricket" target="_blank" style={{color:"red"}}>wikipedia</a>
        </p>
        <h4>Select Two player and you will get their IPL Score comparison based on the previous year.<span style={{ color: "red" }}>NOTE THAT</span> this comparison is totally based on their <a href="https://www.iplt20.com/" target="_blank" style={{color:"red"}}>IPL</a> Score.</h4>
      </div>
      

      <div className="index__cool__div">
        <Grid container>
          <Grid item xs={3}><h2>Player Comparison </h2>
          <div ref={ref} style={{margin:"12%"}} className="main" onClick={() => toggle(!open)}>
        <animated.div className="fill" style={props} />
        <animated.div className="content">{props.width.to(x => x.toFixed(0))}</animated.div>
        {/* {props.width.to(x => x.toFixed(0))} */}
      </div>
          <p>Just Select 2 players from right hand side division and you will see beautiful comparison between this two player 
            in the form of beautiful Area Graph.<br/>This Comparison criteria is totally based on their total IPL score in perticular Year .
          </p>
          </Grid>
          <Grid item xs={9} className="index__cool__div__right">
            <Grid container>
              <h1>Select Two players </h1>
              <div className="index__cool__div__selector">
                <Box >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">player</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={player1}
                      label="Player"
                      onChange={handleplayer1}
                    >
                      {player__name.map((i, num) => {
                        return (
                          <MenuItem value={i}>{i}</MenuItem>
                        )
                      })}
                    </Select>
                    <FormHelperText style={{color:"white",fontSize:"20px"}}><p>PLAYER ONE  ↑</p></FormHelperText>
                  </FormControl>
                </Box>
              </div>

              <div className="index__cool__div__selector">
                {/* sx={{ minWidth: 550,marginLeft:8 }} */}
                <Box style={{color:"white"}} >
                  <FormControl fullWidth>
                    <InputLabel variant="standard" id="demo-simple-select-error-label">player</InputLabel>
                    <Select
                    
                      labelId="demo-simple-select-error-label"
                      id="demo-simple-select-error"
                      value={player2}
                      label="Player"
                      onChange={handleChange}
                    >
                      {player__name.map((i, num) => {
                        return (
                          <MenuItem value={i}>{i}</MenuItem>
                        )
                      })}
                    </Select>
                    <FormHelperText style={{color:"white"}}>PLAYER TWO  	↑</FormHelperText>
                  </FormControl>
                </Box>
              </div>

            </Grid>
            <Grid container><CGraph first__player={player1} second__player={player2} /></Grid>
          </Grid>
        </Grid>
      </div>




      <div className="cool-preview-ac" data-aos="fade-right">
        <Cool />
      </div>

      <div className="above__nevigation" data-aos="fade-right">
        <Grid container >
          <Grid item xs={6}>
            <h2>Graphical Representation</h2>
            <p>Below is the <a style={{color:"red"}} href="https://www.iplt20.com/" target="_blank">Indian Premier League (IPL)</a> year wise Graphical Representation of Top players
                    ,  simply select year and then you will be able to see the interesting information about players include Average runs , Total Runs , Total six and four and lot more. Also you can select team in leftmost side that is Area Chart and you will see the performance of the team by top score of player.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src="/reportanalysis.svg" alt="sample" />
          </Grid>
        </Grid>
      </div>
      
<div className="nevigation__new">
  <Grid container>
    <Grid item xs={3}><Button onClick={() => { setYear("2021") }} variant="contained" >
        2021
      </Button></Grid>
    <Grid item xs={3}><Button onClick={() => { setYear("2020") }} variant="contained" >
        2020
      </Button></Grid>
    <Grid item xs={3}><Button onClick={() => { setYear("2019") }} variant="contained" >
        2019
      </Button></Grid>
    <Grid item xs={3}><Button onClick={() => { setYear("2018") }} variant="contained" >
        2018
      </Button></Grid>
  </Grid>
</div>




      <div className="index__graph" data-aos="fade-right">
        <Grid container>
          <Grid item xs={11}>
        {(() => {
          if (Year == "2021") return <Tester />
          else if (Year == "2020") return <Two />
          else if (Year == "2019") return <Three />
          else return <Four />
        })()
        }</Grid></Grid>
      </div>


      <div className="index__Que" data-aos="fade-right">
        <Grid container>
          <Grid item xs={0.3}><RadioButtonCheckedIcon style={{color:"white",marginTop:"50%",padding:"5%"}} /></Grid>
          <Grid item xs={11.7}><h1 style={{color:"white",fontSize:"33px"}}>Have you observed one thing in above Graphical Representation ?</h1></Grid>
        </Grid>
      </div>
      <div className="index__que__one">
      <p >- if you observe this representation with presence of mind ,you will see that this  data is having top score player at topmost position and player who scored very less ,present at bottom.
        </p>
          <br/><br/><br/>
        <p >
          To download all this data in json format or in api link ,go to the my Github account and there you will be able 
          to download this data , and YOUR CONTRIBUTION IS IMPORTANT so you can also send pull request to us. We want to add 
          all year data with more information so if you have this data than merge with the original file and send request to us
          we will give immediate response.<br/>In future we want to add Test matches data , one day data , world Cup and lot more 
          like female cricket data and about player information so we literally want data so if you have ever scrape this data from 
          any website like crickbuzz and official sites than we literally need your help, last but not list <strong>For open source Contribution
            link is given below .</strong> 
        </p>
      </div>

      <div className="index__api" data-aos="fade-right">
        <Api />
      </div>

      <div className="footer">
      
      <Grid item xs={6} className="footer__icon"> 
                    <IconButton href="https://github.com/bhushanraipurkar/cricket/blob/gh-pages/index.md" target="_blank" className="download__icon" aria-label="Example">
                    <DownloadingIcon className="footer__icon__size"/>
                    </IconButton>
                    <div style={{marginLeft:"-20%"}}>
                     <h2>Your Contribution is<br/><span style={{color:"green",fontSize:"50px",marginLeft:"12%"}}> Important</span></h2>
                    </div>
                    </Grid>
                    <p style={{color:"#b3b3b3",marginLeft:"-20%"}}>© 2021 BhushanRaipurkar. All Right Reserved | Terms and Conditions</p>
                    
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Actual_page

//https://bhushanraipurkar.github.io/cricket/2021.json