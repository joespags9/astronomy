import React from 'react'

import {RxStarFilled} from 'react-icons/rx'

import Legend from '../Legend/Legend';
import Timeline from '../Timeline/Timeline';

import './Header.css'

const Header = () => {
  return (
    <div>
    <div className='app__header' >
      <h1>A Journey to the End of Time</h1>
      <h5>A cosmology website by Joe Spagnuolo, made in React</h5>
    </div>
    <div>
    <Legend/>
    <Timeline/>
    </div>
    </div>
  )
}

export default Header
