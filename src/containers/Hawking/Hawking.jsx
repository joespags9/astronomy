import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './Hawking.css';

import data from '../../constants/data';

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import images from '../../constants/images'

const Hawking = () => {
  return (
      <div className='app__hawking'>
        <div className='app__hawking-header'>
          <div className='app__hawking-title'>
            <h1>Hawking Radiation</h1>
            <h5>Slowly Fading Away</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__hawking-image'>
              <img src={images.Hawking}/>
            </div>
            </motion.div>
          </Tilt>
        </div>
        <br/>
        <br/>
        <div className='app__hawking-other_border'/>
        <div className='app__hawking-summary'>
          <div className='app__hawking-overview'>
            <h1>Overview</h1>
            <br/>
            <p>
              Once thought to be eternal, we now know that black holes will eventually disappear due emission
              of what is known as Hawking Radiation.
            </p>
          </div>
          <div className='app__hawking-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              Although Hawking Radiation has not been experimentally confirmed, certain features of black holes would 
              not make sense without its existence. Consequently, it has come to be accepted by physicists. 
              We know that it will eventually cause black holes to disappear, but that it will take many trillions of years.
            </p>
          </div>
        </div>
        <div className='app__hawking-other_border'/>
        <br/>
        <div className='app__hawking-moreInfo'>
          <div className='app__hawking-moreInfo_title'>
            <h1>More Information</h1>
          </div>
          <div className='app__hawking-moreInfo_cards'>
              <div className='app__hawking-moreInfo_standardModel'>
                <h3>It Was First Formulated by Stephen Hawking</h3>
                <br/>
                <img src={images.Stephen}/>
                <br/>
                <p>
                  This phenomenon is named for acclaimed physicist Stephen Hawking, who came up with the idea following
                  conversations with Soviet scientists in the 1970s. Hawking left convinced that black holes must emit
                  particles, and he later performed a series of calculations that would confirm his suspicions.
                </p>
                <br/>
                <p>
                  Hawking Radiation has yet to be confirmed experimentally, and it could be impossible for us
                  to ever confirm it. The amount of radiation emitted would be incredibly weak, and it is inversely
                  proportional to a black hole's mass. Consequently, the only way to directly observe Hawking Radiation
                  would be to observe an insanely small black hole, and we do not know if black holes so small actually 
                  exist.
                </p>
                <br/>
                <p>
                  Nevertheless, most physicists are convinced of its existence, as its absence would lead to
                  violations of certain thermodynamical laws.
                </p>
              </div>
              <div className='app__hawking-moreInfo_radiation'>
                <h3>It is a Result of Quantum Mechanics</h3>
                <br/>
                <img src={images.Virtual}/>
                <br/>
                <p>
                    According to the laws of quantum mechanics, there are occasional changes in energy at a point in space
                    (known as quantum fluctuations). This produces a pair of particple-antiparticle pairs that quickly annihilate
                    one another.
                </p>
                <br/>
                <p>
                    In the presence of a black hole, however, one particle goes into the black hole, leaving the other
                    without a partner to annihilate. The black hole then emits this foresaken particle as radiation, while the
                    particle that falls in essentaially has negative energy, meaning it subtracts the mass-energy content
                    of the black hole. 
                </p>
                <br/>
                <p>
                    This happens at an accelerating rate as the black hole decreases in size. Eventually, enough mass is taken
                    away that the black hole will vanish.
                </p>
              </div>
              <div className='app__hawking-moreInfo_experiments'>
                <h3>It Will Happen Very, Very Slowly</h3>
                <br/>
                <img src={images.Evaporation}/>
                <br/>
                <p>
                    Since Hawking Radation occurs at the subatomic level, the amount of mass that is being taken away each
                    second is very, very small. So small, in fact, that black holes will take an obscenely long amount of time
                    to evaporate. A black hole with the mass of the sun (only about 1.8 miles in diameter) would take an
                    incredible 10<sup>64</sup> years to evaporate (compare that to the 10<sup>10</sup> years the universe has existed). 
                </p>
                <br/>
                <p>
                    Given that there are black holes many trillions of times the mass of the sun, these will take even longer
                    to disappear, perhaps up to 10<sup>100</sup> years. The only black holes that theoretically could have
                    evaporated by this point would be microscopic. These are known as primordial black holes, and we don't
                    know if they actually exist.
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Hawking
