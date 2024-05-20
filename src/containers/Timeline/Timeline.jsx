import React from 'react';

import data from '../../constants/data';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {RxStarFilled} from 'react-icons/rx'
import {CgEditBlackPoint} from 'react-icons/cg'
import {GiBlackHoleBolas} from 'react-icons/gi'

import './Timeline.css';

const Timeline = () => {
  return (
    <div className="app__timeline">
      <VerticalTimeline>
        {data.eras.map((src, index) => (
          <VerticalTimelineElement contentStyle={src.era === "Stelliferous" ? {background:"var(--color-stelliferous)"} : (src.era === "Degenerate" ? {background:"var(--color-degenerate)"} : (src.era === "BlackHole" ? {background:"var(--color-blackhole)"} : {background:"black"}))} iconStyle={src.era === "Stelliferous" ? {background:"var(--color-stelliferous)"} : (src.era === "Degenerate" ? {background:"var(--color-degenerate)"} : (src.era === "BlackHole" ? {background:"var(--color-blackhole)"} : {background:"#000000"}))} icon={src.era === "Stelliferous" ? <RxStarFilled/> : (src.era === "Degenerate" ? <CgEditBlackPoint/> : <GiBlackHoleBolas/> )}>
            <h1>{src.event}</h1>
            <h5>{src.subtitle}</h5>
            <br/>
            <h4>{"Years from now: " + src.years + " Years"}</h4>
            <br/>
            <br />
            <h1>Overview:</h1>
            {src.list.map((src2,index) => (
              <li>{src2}</li>
            ))}

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
