
import { useState, useEffect } from 'react';
import * as d3 from 'd3';

import './Population.css';

const POPULATION_2019 = 21_800_000;
const UT_2019 = 1546281000;
const SECS_IN_YEAR = 86400 * 365.25;
const POP_GROWTH_RATE = 0.612 / 100;

const formatPop = (x) => d3.format(",")(Math.round(x));

function getUnixTime() {
  return Date.now() / 1000;
}

function getPopulationProj(unixTime) {
  const elapsedYears = (unixTime - UT_2019) / SECS_IN_YEAR;
  const populationProj = POPULATION_2019
    * Math.pow(1 + POP_GROWTH_RATE, elapsedYears)
  return populationProj;
}


export default function Population() {
  const [unixTime, setUnixTime] = useState(getUnixTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setUnixTime(unixTime => (getUnixTime()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const unixTimeDayStart = (Math.floor(unixTime / 86400) - 5.5/24) * 86400;
  const populationProjDayStart = getPopulationProj(unixTimeDayStart);
  const populationProj = getPopulationProj(unixTime);
  const deltaToday = populationProj - populationProjDayStart;
  const bornToday = deltaToday * 3;
  const renderedTime = new Date(unixTime * 1000).toLocaleTimeString();

  return (
    <div className="div-outer">
      <div className="div-population">
        <strong>
          <span>
            {formatPop(populationProj)}*
          </span>
        </strong>
        <sup className="div-projection">
          {'* Projection for '}
          <strong>{renderedTime}</strong>
        </sup>
      </div>
      <div>
        Sri Lankans
      </div>
      <div>
        (<strong>{`${formatPop(bornToday)}* `}</strong>
        of whom were born today)
      </div>
    </div>
  );
};
