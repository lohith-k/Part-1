import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = ({content}) => {
  return (
    <div>
     <Part content={content[0]} />
     <Part content={content[1]} />
      <Part content={content[2]} />
    </div>
  )
}
const Part=({content})=>{
  return (
    <p>
     {content.name} {content.exercises}
    </p>
  )

}
const Total = ({content}) => {
  return (
    <div>
        <p>Number of exercises { content[0].exercises+content[1].exercises+content[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content content={[part1,part2,part3]} />
      <Total content={[part1,part2,part3]} />
    </div>
  )
}

export default App