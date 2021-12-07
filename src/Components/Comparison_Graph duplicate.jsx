import React,{PureComponent} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid,defs,linearGradient, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import players_G from "./CSK_UPDATE copy.json";
import "./CSS/comparison.css";

const Comparison_Graph = (props) => {
    return (
<div style={{backgroundColor:"black"}}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={players_G}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#009DAE" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ABDCFF" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00e64d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0}/>
    </linearGradient>
  </defs>

          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='Year' />
          <YAxis type="number" domain={[0, 750]} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={props.first__player} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey={props.second__player} stroke="white" fillOpacity={1} fill="url(#colorPv)" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
</div>  

    )
}

export default Comparison_Graph
