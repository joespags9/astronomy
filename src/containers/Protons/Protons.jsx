import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import './Protons.css';

import data from '../../constants/data';

import MoreInfo from '../../components/MoreInfo/MoreInfo'

import images from '../../constants/images'

const Protons = () => {
  return (
      <div className='app__protons'>
        <div className='app__protons-header'>
          <div className='app__protons-title'>
            <h1>Proton Decay</h1>
            <h5>Will they stay or will they go?</h5>
           </div>
          <Tilt>
            <motion.div>
            <div className='app__protons-image'>
              <img src={images.ProtonDecay}/>
            </div>
            </motion.div>
          </Tilt>
        </div>
        <br/>
        <br/>
        <div className='app__protons-other_border'/>
        <div className='app__protons-summary'>
          <div className='app__protons-overview'>
            <h1>Overview</h1>
            <br/>
            <p>
              Once thought to be stable and eternal, more recent theories suggest that the proton
              will actually decay after an obscenely long period of time. This would mean that stellar
              leftovers like black dwarfs and neutron stars would essentially dissolve away into radiation.
            </p>
          </div>
          <div className='app__protons-knowledge'>
            <h1>Summary of our Knowledge</h1>
            <br/>
            <p>
              Current theories of particle physics suggest that the proton has a lifetime of around 10<sup>34</sup> years.
              For comparison's sake, the universe is around 10<sup>10</sup> years old. However, proton decay has yet to be
              observed experimentally, meaning we can only speculate on what will happen.
            </p>
          </div>
        </div>
        <div className='app__protons-other_border'/>
        <br/>
        <div className='app__protons-moreInfo'>
          <div className='app__protons-moreInfo_title'>
            <h1>More Information</h1>
          </div>
          <div className='app__protons-moreInfo_cards'>
              <div className='app__protons-moreInfo_standardModel'>
                <h3>The Standard Model is Incomplete</h3>
                <br/>
                <img src={images.StandardModel}/>
                <br/>
                <p>
                  Our current model for understanding particle physics is represented by the Standard Model. This decades-old
                  model has done an excellent job predicting the behavior of subatomic particles as well as predicting the 
                  existence of hypothetical features (such as the Higgs Boson). It predicts that protons are stable, meaning that
                  they cannot decay and will always be around, even at the end of the universe.
                </p>
                <br/>
                <p>
                  However, we have known for a while that the Standard Model is not a full description of subatomic particles. The
                  Standard Model poorly explains concepts like dark energy and dark matter, and completely disregards gravity. This
                  has led scientists to look for new models that will supercede the Standard Model.
                </p>
                <br/>
                <p>
                  Many of these new models predict that the proton is <i>not</i> eternal, and will decay after an
                  obscenely long period of time. These models also predict the existence of things previously thought
                  impossible, such as the existence of magnetic monopoles (magnets that only have a north or south pole).
                  Some of these models have been ruled out experimentally, others have not.
                </p>
              </div>
              <div className='app__protons-moreInfo_radiation'>
                <h3>Protons Would Decay into Radiation</h3>
                <br/>
                <img src={images.Decay}/>
                <br/>
                <p>
                    In the models for which proton decay is possible, it is believed that the proton will turn into
                    a positron (positive electron) and a pion (a quark and anti-quark pair). The pion then decays into
                    2 gamma ray photons. So, in the end, we are essentially left with radiation.
                </p>
                <br/>
                <p>
                    Estimates for the average lifetime of a proton range between 10<sup>31</sup> to 10<sup>36</sup> years. Experiments
                    have been pushing the estimated lifetime of protons to get longer and longer.
                </p>
                <br/>
                <p>
                  However, much as not every animal dies at the moment it reaches the average age of death for its species,
                  not all protons will take that long to decay. In theory, we should be able to observe protons occasionally decay,
                  though it would be extremely rare this early into the universe's existence.
                </p>
              </div>
              <div className='app__protons-moreInfo_experiments'>
                <h3>Experiments are Underway</h3>
                <br/>
                <img src={images.Dune}/>
                <br/>
                <p>
                  Although some of our more recent theories require proton decay, we cannot declare it true unless it
                  can be observed experimentally. So determined are scientists to find proton decay, that we have seen 
                  some remarkable expeiments over the years. 
                </p>
                <br/>
                <p>
                  In 1996, Japan completed construction on the Super-Kamiokande Detector, designed to, among other things,
                  detect proton decay. It is essentially a cylindrical tank 130 feet in diameter starting at the surface and reaching a half-mile
                  underground. This tank was filled with pure water, which amounted to around 10<sup>31</sup> water molecules. The hope
                  was that some of these would be observed to decay. However, this detector has yet to observe proton decay, meaning that the 
                  lifetime would be significantly longer than 10<sup>31</sup> years.
                </p>
                <br/>
                <p>
                  Now, scientists at FermiLab in Chicago are in the process of creating a detector that will stretch from Chicago
                  to western South Dakota (around 800 miles). Known as the Deep Underground Neutrino Experiment (DUNE), it is scheduled
                  to begin taking measurements in the 2030s. One important goal is to look for proton decay.
                </p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Protons
