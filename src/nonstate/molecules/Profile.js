import {PROFILES} from '../../constants/Profile.js';
import Link from '../../nonstate/atoms/Link.js';
import './Profile.css';

import iconGitHub from '../../assets/images/icon_github.png';
import iconLinkedIn from '../../assets/images/icon_linkedin.png';
import iconTwitter from '../../assets/images/icon_twitter.png';

export default function Profile(props) {
  const {profileID} = props;

  const {
    name,
    designation,
    imgSrc,
    githubProfileUrl,
    linkedinProfileUrl,
    twitterProfileUrl,
  } = PROFILES[profileID];

  return (
    <div className="div-profile">
      <img className="img-profile" src={imgSrc} alt={profileID}/>
      <div className="div-name">
        {name}
      </div>
      <div className="div-designation">
        <strong>{designation}</strong>
      </div>
      {
        [
          {url: linkedinProfileUrl, icon: iconLinkedIn},
          {url: twitterProfileUrl, icon: iconTwitter},
          {url: githubProfileUrl, icon: iconGitHub},
        ].map(
          function({url, icon}, i) {
            if (!url) {
              return null;
            }
            return (
              <Link href={url}>
                <img className="img-social-icon" src={icon} alt="linkedin" />
              </Link>
            );
          }
        )
      }
    </div>
  )
}
