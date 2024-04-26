import React, { useState } from 'react';
import BodyActual from '../BodyActual';
import { Container } from 'react-bootstrap';
import { searchAPI } from '../../211api';


export const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const data = await searchAPI(searchTerm, location);
  //     setSearchResults(data.results);
  //   } catch (error) {
  //     console.error('Error searching:', error);
  //     alert('An error occurred while searching. Please try again.');
  //   }
  // };

  // const displaySearchResults = () => {
  //   if (searchResults.length === 0) {
  //     return;
  //   }

  //   return searchResults.map(result => (
  //     <div key={result.id}>
  //       <p><strong>Title:</strong> {result.title}</p>
  //       <p><strong>Description:</strong> {result.description}</p>
  //       <p><strong>Location:</strong> {result.location}</p>
  //     </div>
  //   ));
  // };

  return (
    <Container>
      <BodyActual NavActual>
        <marquee>Do NOT use the application around your POH. Only return when safe. Do NOT use the application around your POH. Only return when safe.</marquee>
        <div className='about-decoy'>
          RESOURCES
          <hr />
          <p>Search for more resources: (i.e. DV shelter 90501)</p>

          <div className="gcse-search"></div>
          {/* <div>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search term"
            />
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Location"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div id="search-results">
            {displaySearchResults()}
          </div> */}
          <hr />
          NATIONAL DOMESTIC VIOLENCE HOTLINE: SPEAK/CHAT WITH AN ADVOCATE
          <br />
          https://www.thehotline.org/
          <hr />
          988 SUICIDE AND CRISIS LIFELINE
          <br />
          https://988lifeline.org/
          <hr />
          211: GENERAL INFORMATION (SHELTERS, MENTAL HEALTH, IMMIGRANT HELP)
          <br />
          https://www.211.org/
          <hr />
          DEPARTMENT OF SOCIAL SERVICES: FOOD STAMPS/LOW-INCOME HEALTH INSURANCE/CASH AID
          <br />
          [varies by state; call 211 for your specific DPSS line and website]
          <hr />
          STRONG HEARTS NATIVE AMERICAN HELP
          <br />
          http://strongheartshelpline.org/
          <hr />
          WOMEN'S LAW: STATE-BY-STATE INFO ON LAWS INCLUDING RESTRAINING ORDERS/CHILD CUSTODY
          <br />
          https://www.womenslaw.org/
          <hr />
          ABUSED DEAF WOMEN'S ADVOCACY SERVICES (ADWAS)
          <br />
          INFO ON HOW TO SEEK SUPPORT: https://www.youtube.com/watch?v=ql7zD8X80wE
        </div>
      </BodyActual>
    </Container>
  );
};

export default ResourcesPage;
