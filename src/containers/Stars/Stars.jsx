import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './Stars.css';

import data from '../../constants/data';

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import images from '../../constants/images'

const Stars = () => {
  return (
      <div className='app__stars'>
        <div className='app__stars-header'>
          <div className='app__stars-title'>
            <h1>Stellar Lifecycle</h1>
            <h5>When you wish upon a (possibly dead) star</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__stars-image'>
              <img src={images.Supernova}/>
            </div>
            </motion.div>
          </Tilt>
        </div>
        <br/>
        <br/>
        <div className='app__stars-other_border'/>
        <div className='app__stars-summary'>
          <div className='app__stars-overview'>
            <h1>Overview</h1>
            <br/>
            <p>
              All stars begin from large dust clouds, but they all eventually die. Depending on how massive they are,
              they will end up as either white dwarfs, neutron stars, or black holes. White dwarfs eventually
              cool down and become black dwarfs.
            </p>
          </div>
          <div className='app__stars-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              We have witnessed all types of star formation/star deaths except for the conversion of 
              white dwarfs into black dwarfs. This is because it takes on obscenely long period of
              time for a white dwarf to cool down to become a black dwarf, far longer than the universe has
              existed.
            </p>
          </div>
        </div>
        <div className='app__stars-other_border'/>
        <br/>
        <div className='app__stars-moreInfo'>
          <div className='app__stars-moreInfo_title'>
            <h1>More Information</h1>
          </div>
          <div className='app__stars-moreInfo_cards'>
              <div className='app__stars-moreInfo_lowMass'>
                <h3>Low Mass Stars Become White Dwarfs</h3>
                <br/>
                <img src={images.WhiteDwarf}/>
                <br/>
                <p>
                  Low-mass stars like our sun last for several billion years before the hygrogen
                  in their cores is exhausted, and they begin to form heavier elements (such as 
                  carbon and oxygen). The formation of heavier elements causes the star to expand 
                  into a "red giant" phase. For our sun, the red giant phase will swallow up Mercury,
                  Venus, and possibly the Earth as well.
                </p>
                <br/>
                <p>
                  Eventually, the sun can no longer fuse any more elements, and it becomes a white dwarf,
                  made of Carbon and Oxygen. A white dwarf is approximately the size of Earth, but is significantly
                  denser and hotter. These white dwarfs will take trillions and trillions of years to cool down,
                  eventually turning into black dwarfs.
                </p>
              </div>
              <div className='app__stars-moreInfo_highMass'>
                <h3>High Mass Stars Go Supernova</h3>
                <br/>
                <img src={images.Explosion}/>
                <br/>
                <p>
                    The core of a high-mass star will eventually exhaust its hydrogen and begin to form heavier
                    elements, eventually culminating in iron, which cannot fuse any further. At this point, the rest
                    of the star collapses, compressing the iron sphere and then radiating out in a supernova explosion.
                </p>
                <br/>
                <p>
                    Depending on the mass of the original star, what remains will either be a neutron star
                    or a black hole. It is this process that is believed to be the result of all heavy elements
                    in the universe.
                </p>
              </div>
              <div className='app__stars-moreInfo_remains'>
                <h3>We Don't Know What Becomes of the Remains</h3>
                <br/>
                <img src={images.BlackDwarf}/>
                <br/>
                <p>
                  In trillions upon trillions of years, we will have left black holes, black dwarfs, and neutron stars.
                  We know that black holes will eventually evaporate via Hawking Radiation. However, there are two possible
                  outcomes for black dwarfs and neutron stars.
                </p>
                <br/>
                <p>
                  If it turns out that protons decay, black dwarfs and neutron stars will evaporate away as
                  radiation over many trillions of years. If the proton does not decay, a process known as
                  quantum tunneling will turn these bodies into balls of pure iron (called "iron stars"). The
                  timespan needed to turn all black dwarfs and neutron stars into iron stars is so obscenely
                  gigantic that it's difficult to put into perspective.
                </p>
                <br/>
                <p>
                  These iron stars will eventually either collapse into black holes (and eventually disappear), or
                  simply continue existing as unchanging iron spheres in a dead universe.
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Stars

