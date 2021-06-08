import './HomePage.css';
import Population from '../atoms/Population.js';
import SVGMap from '../atoms/SVGMap.js';

export default function HomePage(props) {
  return (
    <div className="div-home-page">
      <div className="div-mission-home">
        Let's make <strong>100%</strong> of Sri Lanka's public data, digitized, efficiently processible, and accessible so that
      </div>

      <Population />

      <div className="div-mission-home">
        can make meaningful use of it
      </div>

      <SVGMap regionID="LK"/>
    </div>
  );

}
