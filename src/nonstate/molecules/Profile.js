import {PROFILES} from '../../constants/Profile.js';
import Link from '../../nonstate/atoms/Link.js';
import './Profile.css';

import iconGitHub from '../../assets/images/icon_github.png';
import iconLinkedIn from '../../assets/images/icon_linkedin.png';
import iconTwitter from '../../assets/images/icon_twitter.png';
import iconGoogleScholar from '../../assets/images/icon_google_scholar.png';
import iconWikipedia from '../../assets/images/icon_wikipedia.png';
import iconWebsite from '../../assets/images/icon_website.png';

export default function Profile(props) {
  const {profileID} = props;

  const {
    name,
    designation,
    imgSrc,
    githubProfileUrl,
    linkedinProfileUrl,
    twitterProfileUrl,
    googleScholarProfileUrl,
    wikipediaProfileUrl,
    websiteUrl,
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
          {url: websiteUrl, icon: iconWebsite},
          {url: linkedinProfileUrl, icon: iconLinkedIn},
          {url: twitterProfileUrl, icon: iconTwitter},
          {url: githubProfileUrl, icon: iconGitHub},
          {url: wikipediaProfileUrl, icon: iconWikipedia},
          {url: googleScholarProfileUrl, icon: iconGoogleScholar},
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
