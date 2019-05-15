import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
 
  const MostVotes = (props) => {
      let mostVotes = Math.max(...props.votes)
      let mostvotesIndex = props.votes.indexOf(mostVotes)
      const mostVotesAnec = props.anecdotes[mostvotesIndex]
    
      return( 
          <>
          
          <h1>anecdote with most votes</h1>
          <p>{mostVotesAnec}</p>
          <p>has {mostVotes} votes</p>
          </>  

            
) 
              
        }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, SetVotes] = useState(new Array(anecdotes.length).fill(0)) 
  
  const setToSelected = () => {
    setSelected(Math.floor(Math.random()*6))
  }

  const setToVotes = index =>{
    votes[index] = votes[index]+1
    SetVotes(votes)
    
}



  return (
    <div>
     <p>{props.anecdotes[selected]}</p>
     <p>has {votes[selected]} votes</p>
      <Button handleClick={() => setToSelected()} text="next anecdote" />
      <Button handleClick={() => setToVotes(selected)} text="vote" />
      <MostVotes votes={votes} anecdotes={anecdotes}></MostVotes>
      

    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)