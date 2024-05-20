import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './DarkEnergy.css';

import data from '../../constants/data';

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import images from '../../constants/images'

const DarkEnergy = () => {
  return (
      <div className='app__darkEnergy'>
        <div className='app__darkEnergy-header'>
          <div className='app__darkEnergy-title'>
            <h1>Dark Energy</h1>
            <h5>Feel the power of the dark side</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__darkEnergy-image'>
              <img src={images.DarkEnergy}/>
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
              Our universe began with the big bang 13.7 billion years ago, and it has been expanding ever since.
              We refer to the force expanding the universe as dark energy. Understanding dark energy is key to
              understanding the future of the universe.
            </p>
          </div>
          <div className='app__darkEnergy-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              Dark energy makes up around 68% of the universe. Although we can witness its effects by observing 
              the expansion of space, the exact nature of dark energy is a mystery. 
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
                <h3>Einstein Thought of it First... Sort Of</h3>
                <br/>
                <img src={images.Einstein}/>
                <br/>
                <p>
                  Einstein was a firm believer in a "steady-state" universe, where it did not
                  expand or contract over time. In order to prevent gravity from causing the
                  universe to collapse in on itself, he proposed that empty space contained
                  a special property that prevented it from contracting. He referred to this
                  property as the "cosmological constant."
                </p>
                <br/>
                <p>
                  When observations from Edwin Hubble and others showed definitively that the 
                  universe is expanding, Einstein abandoned this idea, later calling it his 
                  "greatest blunder." However, when observations made decades later showed the
                  expansion of the universe accelerating faster than gravity allowed for, Einstein's
                  idea made a comeback with the new moniker "dark energy."
                </p>
                <br/>
                <p>
                  So although he introduced the concept for erroneous reasons, Einstein's 
                  "greatest blunder" proved to be a very valuable insight.
                </p>
              </div>
              <div className='app__darkEnergy-moreInfo_acceleration'>
                <h3>The Expansion of the Universe is Accelerating</h3>
                <br/>
                <img src={images.Expansion}/>
                <br/>
                <p>
                  After the big bang and the expansion of the universe gained widespread acceptance,
                  the discussion then became what exactly would happen to the universe in the distant future.
                  It was assumed that the universe would eventually collapse in on itself, as gravity would
                  surely counteract the initial "bang" that first caused the universe to expand.
                </p>
                <br/>
                <p>
                  In the 1990s, scientists did more measurements on the expansion of the universe, and much
                  to their surprise, the expansion of the universe was actually accelerating. This suggested
                  that there existed something in space that was counteracting the force of gravity.
                </p>
                <br />
                <p>
                  Due to its unknown nature, it was given the name "dark energy."
                </p>
              </div>
              <div className='app__darkEnergy-moreInfo_explanations'>
                <h3>We Don't Know What Dark Energy Actually Is</h3>
                <br/>
                <img src={images.Quintessence}/>
                <br/>
                <p>
                  Although we can readily observe the effects of dark energy via the expansion of the universe,
                  what it is and where it originates is still a mystery.
                </p>
                <br/>
                <p>
                  Some believe it is an inherent property of empty space (Einstein's "cosmological constant"), 
                  others believe it is part of a hypothetical field called the quintessence field,
                  still others think it's just an effect of general relativity around black holes. 
                </p>
                <br/>
                <p>
                  Whatever the case, we know it exists in some form, and physicists are attempting to find
                  possible explanations.
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default DarkEnergy
