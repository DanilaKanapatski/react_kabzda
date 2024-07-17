import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
  alert('hi')
}

function App() {
  debugger
  return (
    <div >
      <AppTitle/>
      <Rating />
      <Accordion/>
    </div>
  );
}

function AppTitle() {
  return <>This is App Component</>
}

function Rating() {
  debugger
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Accordion() {
  debugger
  return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}

function Star() {
  debugger
  return (
    <div>
      star
    </div>
  )
}

function AccordionTitle() {
  debugger
  return (
    <h3>Меню</h3>
  )
}

function AccordionBody() {
  debugger
  return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  )
}

export default App;
