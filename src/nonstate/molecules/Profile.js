import {PROFILES} from '../../constants/Profile.js';
import './Profile.css';

export default function Profile(props) {
  const {profileID} = props;

  const {name, designation, imgSrc, linkedinProfile} = PROFILES[profileID];

  return (
    <div className="div-profile">
      <a href={linkedinProfile} target="_blank" rel="noreferrer">
        <img className="img-profile" src={imgSrc} alt={profileID}/>
      </a>
      <div className="div-name">
        {name}
      </div>
      <div className="div-designation">
        <strong>{designation}</strong>
      </div>
    </div>
  )
}
