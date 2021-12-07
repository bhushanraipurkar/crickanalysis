import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import "./CSS/Api.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HighlightAltIcon from '@mui/icons-material/DoubleArrow';




const Api = () => {
    const [value , setValue] = useState("2021");
    const url =`https://bhushanraipurkar.github.io/cricket/${value}.json`;
    return (
        <div>
            <div className="main__div">
        <Grid container className="api__main">

            <Grid item xs={9} className="api__main__left">
               <div>
                
                <Grid container>
                    <Grid item xs={12} className="api__main__preview">
                    <h1>Preview</h1><br/>
                   <iframe className="api__main__previewer" src={url} title="Trail view"></iframe>
                
                    </Grid>
                    {/* <Grid item xs={6} className="right__right__right"> 
                    <IconButton href="https://github.com/bhushanraipurkar/cricket/blob/gh-pages/index.md" target="_blank" className="download__icon" aria-label="Example">
                    <DownloadingIcon className="download__icon__size"/>
                    </IconButton>
                    <div style={{textAlign:"center"}}>
                     <h2>Your Contribution is<br/><span style={{color:"green",fontSize:"50px"}}> Important</span></h2>
                    </div>
                    </Grid> */}
                </Grid>
                
                </div>
                <br/><br/>
            <p style={{marginLeft:"4%",fontSize:"40px"}}>API Link</p>
        <div className="link__api">
            <Grid container>
                <Grid item xs={11} className="api__link">{url}</Grid>
            </Grid>
        </div>

            </Grid>


            <Grid item xs={3} className="api__main__right">
                <h1>Select Year</h1>
            <List className="additional" sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper',backgroundColor:"white",overflowY:"hidden",height:"70%", overflowX:"hidden"}}>
         {['2021','2020','2019','2018'].map((value, num) => (
          <ListItem button key={num}
          sx={{borderBottom:"1px solid #e6e6e6",borderTop:"1px solid #e6e6e6"}}
          disableGutters
          onClick={(e)=>{setValue(value)}}
          >
            <ListItemIcon>
            <HighlightAltIcon sx={{color:'green', marginLeft:"35%"}} />
            </ListItemIcon>
            <ListItemText sx={{color:"color",marginLeft:"15%"}} primary={`${value}`} />
          </ListItem>
        ))}
        </List>
            </Grid>
        </Grid> 
        </div>
        </div>
    )
}

export default Api
