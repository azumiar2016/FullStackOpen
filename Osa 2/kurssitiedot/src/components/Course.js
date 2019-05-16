import React from 'react'

const Course = ({ course }) => {

  return (
    <div>
    <Header course={course.name} />
    <ul>
    {rows(course)}
    </ul>
    <p>yhteensä {Total(course)} tehtävää</p>
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const rows = (course) => course.parts.map(part =>
  <li key={part.id}>
    {part.name} {part.exercises}
  </li>
)



const Total = (course) => course.parts.reduce(function(sum,part) {
  return sum+part.exercises
},0)

/*
const Part = (props) => {
  return  (
    <div>
    <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}*/

/*
const Content = (props) => {

  return (
    <div>
      <Part part = {props.parts[0]}  />
      <Part part = {props.parts[1]}  />
      <Part part = {props.parts[2]}  />
    </div>
  )
}*/
export default Course