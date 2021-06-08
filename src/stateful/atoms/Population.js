
import { useState, useEffect } from 'react';
import * as d3 from 'd3';

import './Population.css';

function getUnixTime() {
  return Date.now() / 1000;
}

const formatPop = d3.format(",");

const POPULATION_2019 = 21_800_000;
const UT_2019 = 1546281000;
const SECS_IN_YEAR = 86400 * 365.25;
const POP_GROWTH_RATE = 0.612 / 100;

export default function Population() {
  const [unixtime, setUnixTime] = useState(getUnixTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setUnixTime(unixtime => (getUnixTime()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const elapsedYears = (unixtime - UT_2019) / SECS_IN_YEAR;
  const pop_signal = POPULATION_2019
    * Math.pow(1 + POP_GROWTH_RATE, elapsedYears)
  const population = Math.round(pop_signal);

  return (
    <strong>
      <span className="div-population">
        {formatPop(population)}
        <sup className="div-projection">
          {'Projection as of '}
          <strong>{new Date().toLocaleTimeString()}</strong>
        </sup>
      </span>
    </strong>
  );
};
