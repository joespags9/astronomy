import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './MoreInfo.css';
import data from '../../constants/data';

import images from '../../constants/images'

const MoreInfo = ({info}) => {
  return (
      <div className='app__darkEnergy'>
        <div className='app__darkEnergy-header'>
          <div className='app__darkEnergy-title'>
            <h1>{info.title}</h1>
            <h5>{info.caption}</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__darkEnergy-image'>
              <img src={info.tiltImage}/>
            </div>
            </motion.div>
          </Tilt>
        </div>
        <br/>
        <br/>
        <div className='app__darkEnergy-other_border'/>
        <div className='app__darkEnergy-summary'>
          <div className='app__darkEnergy-overview'>
            <h1>Overview</h1>
            <br/>
            <p>
              {info.overview}
            </p>
          </div>
          <div className='app__darkEnergy-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              {info.summary} 
            </p>
          </div>
        </div>
        <div className='app__darkEnergy-other_border'/>
        <br/>
        <div className='app__darkEnergy-moreInfo'>
          <div className='app__darkEnergy-moreInfo_title'>
            <h1>More Information</h1>
          </div>
          <div className='app__darkEnergy-moreInfo_cards'>
              <div className='app__darkEnergy-moreInfo_einstein'>
                <h3>{info.mi1_title}</h3>
                <br/>
                <img src={info.mi1_image}/>
                <br/>
                <p>
                  {info.mi1_p1}
                </p>
                <br/>
                <p>
                    {info.mi1_p2}
                </p>
                <br/>
                <p>
                    {info.mi1_p3}
                </p>
              </div>
              <div className='app__darkEnergy-moreInfo_acceleration'>
                <h3>{info.mi2_title}</h3>
                <br/>
                <img src={info.mi2_image}/>
                <br/>
                <p>
                    {info.mi2_p1}
                </p>
                <br/>
                <p>
                    {info.mi2_p2}
                </p>
                <br />
                <p>
                    {info.mi1_p3}
                </p>
              </div>
              <div className='app__darkEnergy-moreInfo_explanations'>
                <h3>{info.mi3_title}</h3>
                <br/>
                <img src={info.mi3_image}/>
                <br/>
                <p>
                    {info.mi3_p1}
                </p>
                <br/>
                <p>
                    {info.mi3_p2}
                </p>
                <br/>
                <p>
                    {info.mi3_p3}
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default MoreInfo;