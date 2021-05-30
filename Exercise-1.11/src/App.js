import './App.css';
import React, { useState } from 'react'
const Statistics=(props) =>{
  if (props.good===0 && props.neutral===0 && props.bad===0){
return(
  <div>
    <p>No feedback given till now</p>
  
  </div>

)
  }
  else{
  const all=props.good+props.bad+props.neutral
  const avg=(props.good-props.bad)/all
  const positive=(props.good/all)*100
  return(
  <div>
<h2>statistics</h2>
      <br />
      <table>
      <tr>
      <td><Statistic text="good"/></td><td> <Statistic value={props.good} /></td>
      </tr>
      <tr>
      <td><Statistic text="neutral"/></td><td> <Statistic value={props.neutral} /></td>
      </tr>
      <tr>
      <td><Statistic text="bad" /></td><td> <Statistic value={props.bad} /></td>
      </tr>
      <tr>
      <td><Statistic text="all"/></td><td> <Statistic value={all} /> </td>
      </tr>
      <tr>
      <td><Statistic text="average"/></td><td> <Statistic value={avg} /></td>
      </tr>
      <tr>
      <td><Statistic text="positive"/></td><td> <Statistic value={positive+' %'}  /></td>
      </tr>
      </table>
      </div>
  )
  }
}

const Statistic=(props)=>{
 
  return (
    <div>{props.text} {props.value} </div>
  )
  
}

function App() {
  const [good, setgood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setbad] = useState(0)

  const clickgood = () => {
    setgood(good+1)
  }
  const clickneutral = () => {
    setneutral(neutral+1)
  }
  const clickbad = () => {
    setbad(bad+1)
  }
  

  return (
    <div>
    <center>
      <h1>Please give feedback</h1>
      <br/>
      <button onClick={clickgood}  >good</button>
      <button onClick={clickneutral}  >neutral</button>
      <button onClick={clickbad}  >bad</button>
      <br />
      </center>
      <Statistics good={good} bad ={bad} neutral={neutral}></Statistics>
      </div>
      
  )
}

export default App;
