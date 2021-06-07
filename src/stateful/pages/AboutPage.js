import Profile from '../../nonstate/molecules/Profile.js';

import './AboutPage.css';
export default function AboutPage(props) {
  return (
    <div>
      <p className="p-mission">
        Lanka Data Foundation aims to make 100% of Sri Lanka's public data, digitized, efficiently processible, and accessible so Sri Lankans can make meaningful use of it.
      </p>
      <p className="p-org-details">
        The Lanka Data Foundation (LDF) is a citizen driven, not-for-profit, nonpartisan and non-governmental organisation, established in December 2019. LDF leverages ICT know-how to collect, curate and disseminate verified data and information to the public, with the support of research and civil society organisations.
      </p>
      <h2>Our Board</h2>
      <Profile
        name="Sanjiva Weerawarana"
        imgSrc="https://media-exp3.licdn.com/dms/image/C4D03AQExvPTMWbL8MQ/profile-displayphoto-shrink_200_200/0/1516260591433?e=1628726400&v=beta&t=Q9M9STuG9RYS4Nk39w168T6yOyoF8Xi9EJhbayqY9hk"
        designation="Director"
      />
      <h2>Our Team</h2>
    </div>
  );
}
