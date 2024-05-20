import React from 'react'

import './Legend.css'

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import {RxStarFilled} from 'react-icons/rx'
import {CgEditBlackPoint} from 'react-icons/cg'
import {GiBlackHoleBolas} from 'react-icons/gi'

const Legend = () => {
  return (
    <div className='app__icons'>
        <div className='app__icons-stelliferous'>
            <RxStarFilled/>
        </div>
        <div className='app__icons-degenerate'>
            <CgEditBlackPoint/>
        </div>
        <div className='app__icons-blackhole'>
            <GiBlackHoleBolas/>
        </div>
        <div className='app__icons-dark'>
            <RxStarFilled/>
        </div>
    </div>
  )
}

export default Legend
