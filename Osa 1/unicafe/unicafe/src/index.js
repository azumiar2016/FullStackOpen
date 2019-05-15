import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )


  const Statistic = (props) => (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    
  )

  const Statistics = (props) => {
    const total = props.bad+props.good+props.neutral;
    const avg = (props.bad*(-1)+props.good*1)/total;

    if(total>0){
        return( 
              
              <tbody>
            <Statistic text="hyvä" value={props.good}/>
            <Statistic text="neutraali" value={props.neutral}/>
            <Statistic text="huono" value={props.bad}/>
            <Statistic text="yhteensä" value={total}/>
            <Statistic text="keskiarvo" value={avg}/>
            <Statistic text="positiivisia" value={(props.good/total)*100+"%"}/>
            </tbody>

            
            
              )
    }
      return (
          <tbody>
          <tr>
            <td>Ei yhtään palautetta annettu</td>
          </tr>
          </tbody>
      )
    }


const App = () => {

    const setGoodValue = newValue=>{
        setGood(newValue)
    }
    const setNeutralValue = newValue=>{
        setNeutral(newValue)
    }
    const setBadValue = newValue=>{
        setBad(newValue)
    }
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    

   <div>
    <h1>anna palautetta</h1>
    <Button handleClick={() => setGoodValue(good+1)} text="hyvä" />
    <Button handleClick={() => setNeutralValue(neutral+1)} text="neutraali" />
    <Button handleClick={() => setBadValue(bad+1) } text="huono" />
    <h1>statistiikka</h1>
    <table>
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)