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
     {content.part} {content.exercises}
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
  const content=[{
   part : 'Fundamentals of React',
   exercises : 10},
   {part : 'Using props to pass data',
   exercises : 7},
   {part: 'State of a component',
  
   exercises : 14
  }]
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content}/>
    </div>
  )
}

export default App