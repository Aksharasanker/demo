
import './App.css';

import Example from './components/Example';
import style from '../src/myStyle.module.css';
import User from   './components/User'
import Random from './components/Random';
import Sample from './components/Sample';
import Table from './components/Table';
function App() {
  //js code
  const subject='REACT'
  const h1style={
    backgroundColor:'yellow',fontSize:'50px'
  }
  const data="hello all"
  const username='maxwell'
  const age=27
  return (
    /*jsx code */
    <>
    <h1 style={{backgroundColor:'yellow',fontSize:''}}>Welcome to react Application</h1>
    <h3 style={{color:'red'}}>My first programme...............</h3>
    <h5>My choosen subject is:{subject}</h5>
    <h5>My choosen subject is</h5>

    <h6 className={style.reactsubject}>Types of components</h6>


    <ul>
      <li><Example d={data}/></li>
      <li><User uname={username} uage={age}/></li>
      <li><Random sub={subject}/></li>
    </ul>
    <Sample/>
    <Table/>
    </>
  );
}

export default App;
