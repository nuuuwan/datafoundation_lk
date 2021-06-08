import { useState, useEffect } from 'react';
import { geoEqualEarth, geoPath } from 'd3-geo';

import GeoServer from '../../core/GeoServer.js';

import './SVGMap.css';

export default function SVGMap(props) {
  const {regionID} = props
  const [geo, setGeo] = useState(undefined);

  useEffect(() => {
    async function getAndSetGeo() {
      setGeo(await GeoServer.getGeo(regionID));
    }
    getAndSetGeo();
  }, [regionID]);

  return geo ? (
    <SVGMapInner geo={geo} />
  ) : 'Loading...';
};

function SVGMapInner(props) {
  const {geo} = props;
  const [width, height] = [300, 500];
  const projection = geoEqualEarth()
    .fitExtent([[0, 0], [width, height]], geo);

  return (
     <svg className="svg-map-inner" width={ width } height={ height }>
      <path
        className="path-map"
        d={geoPath().projection(projection)(geo)}
      />
    </svg>
  )
}
