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
      <p>
        {content.part1} {content.exercises1}
      </p>
      <p>
        {content.part2} {content.exercises2}
      </p>
      <p>
        {content.part3} {content.exercises3}
      </p>
    </div>
  )
}
const Total = ({content}) => {
  return (
    <div>
        <p>Number of exercises { content.exercises1+content.exercises2+content.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const content={
   part1 : 'Fundamentals of React',
   exercises1 : 10,
   part2 : 'Using props to pass data',
   exercises2 : 7,
   part3 : 'State of a component',
  
   exercises3 : 14
  }
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content}/>
    </div>
  )
}

export default App