import Profile from '../../nonstate/molecules/Profile.js';
import Logo from '../../nonstate/atoms/Logo.js';

import './AboutPage.css';
export default function AboutPage(props) {
  return (
    <div>
      <h2>Our Mission</h2>
      <p className="p-mission">
        The <Logo/> aims to make 100% of Sri Lanka's public data, digitized, efficiently processible, and accessible so that Sri Lankans can make meaningful use of it.
      </p>
      <p className="p-org-details">
        The Lanka Data Foundation (LDF) is a citizen driven, not-for-profit, non-partisan and non-governmental organisation, established in December 2019. LDF leverages ICT know-how to collect, curate and disseminate verified data and information to the public.
      </p>
      <h2>Our Board</h2>
      <Profile profileID={'sanjiva'}/>
      <Profile profileID={'nuwan'}/>
      <Profile profileID={'nishan'}/>
      <h2>Our Team</h2>
      <Profile profileID={'sherazad'}/>
      <Profile profileID={'umayanga'}/>
      <h2>Our Members</h2>
      <Profile profileID={'verite'}/>
      <Profile profileID={'shea'}/>
      <Profile profileID={'louiqa'}/>
      <Profile profileID={'sanjiva'}/>
    </div>
  );
}
