import './App.css';

import Header from './containers/Header/Header';
import Timeline from './containers/Timeline/Timeline';
import Legend from './containers/Legend/Legend';
import Stars from './containers/Stars/Stars';
import Proton from './containers/Protons/Protons';
import Hawking from './containers/Hawking/Hawking';
import DarkEnergy from './containers/DarkEnergy/DarkEnergy';
import Alternate from './containers/Alternate/Alternate';
import Navbar from './components/Navbar/Navbar';

import data from './constants/data'
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <DarkEnergy/>
      <br/>
      <br/>
      <Stars/>
      <br/>
      <br/>
      <Proton/>
      <br/>
      <br/>
      <Hawking/>
      <br/>
      <br/>
      <Alternate/>
    </div>
  );
}

export default App;
