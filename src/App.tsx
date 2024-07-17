import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

function hello() {
  alert('hi')
}

function App() {
  debugger
  return (
    <div >
      <PageTitle title='fdff'/>
      <Rating value={3} />
      <Accordion text='fdfsfdfdffd' collapsed={false } />
      <Rating value={4} />
    </div>
  );
}

type PageTitlePropsType = {
  title : string
}

function PageTitle(props:PageTitlePropsType) {
  return <h1>{props.title}</h1>
}





export default App;
