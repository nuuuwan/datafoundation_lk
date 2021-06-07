import Profile from '../../nonstate/molecules/Profile.js';

import './AboutPage.css';
export default function AboutPage(props) {
  return (
    <div>
      <h2>Our Mission</h2>
      <p className="p-mission">
        Lanka Data Foundation aims to make 100% of Sri Lanka's public data, digitized, efficiently processible, and accessible so Sri Lankans can make meaningful use of it.
      </p>
      <p className="p-org-details">
        The Lanka Data Foundation (LDF) is a citizen driven, not-for-profit, nonpartisan and non-governmental organisation, established in December 2019. LDF leverages ICT know-how to collect, curate and disseminate verified data and information to the public, with the support of research and civil society organisations.
      </p>
      <h2>Our Board</h2>
      <Profile profileID={'sanjiva'}/>
      <Profile profileID={'nishan'}/>
      <Profile profileID={'nuwan'}/>
      <h2>Our Team</h2>
      <Profile profileID={'sherazad'}/>
      <Profile profileID={'umayanga'}/>
    </div>
  );
}
