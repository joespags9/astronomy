import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './Alternate.css';

import data from '../../constants/data';

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import images from '../../constants/images'

const Alternate = () => {
  return (
      <div className='app__alternate'>
        <div className='app__alternate-header'>
          <div className='app__alternate-title'>
            <h1>Alternative Theories</h1>
            <h5>But wait, there's more</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__alternate-image'>
              <img src={images.Fate}/>
            </div>
            </motion.div>
          </Tilt>
        </div>
        <br/>
        <br/>
        <div className='app__alternate-other_border'/>
        <div className='app__alternate-summary'>
          <div className='app__alternate-overview'>
            <h1>Overview</h1>
            <br/>
            <p>
              The ultimate fate of the universe will be likely determined by the nature of dark energy.
              The universe could experience different outcomes depending on whether or not dark energy
              weakens, stays the same, or strengthens.
            </p>
          </div>
          <div className='app__alternate-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              There are three main theories for how the universe can end: the "big rip," the "big crunch," and "heat death."
              Right now, heat death appears to be the most likely scenario, as the strength of dark energy does not
              seem to be changing. The other scenarios have not been officially ruled out, however.
            </p>
          </div>
        </div>
        <div className='app__alternate-other_border'/>
        <br/>
        <div className='app__alternate-moreInfo'>
          <div className='app__alternate-moreInfo_title'>
            <h1>More Information</h1>
          </div>
          <div className='app__alternate-moreInfo_cards'>
              <div className='app__alternate-moreInfo_standardModel'>
                <h3>Alternate Scenario 1: The Big Crunch</h3>
                <br/>
                <img src={images.BigCrunch}/>
                <br/>
                <p>
                  If dark energy weakens over time, the universe would experience what is termed "the big crunch."
                  Under this scenario, the universe stops its expansion, and gravity takes over as the dominant force,
                  causing the universe to collapse in on itself. All the information in the cosmos would be encased in 
                  a supermassive black hole gradually "crunching" into a very hot, very dense point in space.
                </p>
                <br/>
                <p>
                  The big crunch often coincides with what is known as the "big bounce," which states that the universe
                  would rebound after collapsing and essentially begin anew. The big bounce postulates that this has 
                  actually happened many times, thus making the universe eternal, with no real beginning or end.
                </p>
                <br/>
                <p>
                  Prior to the discovery of dark energy, this was thought to be the ultimate fate of the universe.
                  While not officially ruled out, the existence of dark energy consistently expanding the universe
                  makes a big crunch very unlikely.
                </p>
              </div>
              <div className='app__alternate-moreInfo_radiation'>
                <h3>Alternate Scenario 2: The Big Rip</h3>
                <br/>
                <img src={images.BigRip}/>
                <br/>
                <p>
                    If dark energy gets stronger over time, the universe would experience what is termed as "the big rip."
                    Under this scenario, dark energy would get so strong that it would overcome all other forces in the universe.
                    The forces holding all matter together would get overwhelmed, and would be subsequently ripped apart.
                    After this point, the universe is expanding faster than the speed of light, meaning that the universe
                    consists of a variety of particles that are incapable of interacting with any other particle. 
                </p>
                <br/>
                <p>
                    If the big rip were to be the ultimate fate of the universe, the universe would have a much shorter
                    lifespan. It would still far outlast humanity, but would probably only last for around 20 billion years.
                </p>
                <br/>
                <p>
                    Right now, measurements of dark energy do not suggest it will get strong enough to cause a big rip.
                    However, the big rip has not been ruled out, even though it is still less likely than heat death.
                </p>
              </div>
              <div className='app__alternate-moreInfo_experiments'>
                <h3>Alternate Scenario 3: Vacuum Decay</h3>
                <br/>
                <img src={images.VacuumDecay}/>
                <br/>
                <p>
                    There is actually a scenario where the universe ends regardless of the nature of dark energy.
                    In fact, this scenario postulates that the universe could end at any second. The scenario has
                    been given the term "vacuum decay."
                </p>
                <br/>
                <p>
                    Vacuum decay suggests that the Higgs field (the field that gives everything in the universe its mass)
                    does not exist at its lowest possible energy state (vacuum state). This means that, if some event causes
                    the field to go to its actual lowest energy state, a huge amount of energy would be released. Such energy
                    would expand at the speed of light, and destroy anything in its path, continuing until the whole universe
                    is destroyed.
                </p>
                <br/>
                <p>
                    Although experiments currently indicate that the Higgs field does exist in a false vacuum (meaning vacuum
                    decay is possible), the length of time needed to get to the lowest energy level is much longer than the current
                    age of the universe, meaning humanity should be okay. Even if it were to happen in the future, galaxies are
                    receding from each other faster than the speed of light, meaning that the decay would only destroy a portion
                    of the universe.
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Alternate

