import React, { useState, useEffect } from 'react';
import BodyActual from '../BodyActual';
import { Container } from 'react-bootstrap';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const cx = '53488ca667b0d454b'; 
    const gcseScript = document.createElement('script');
    gcseScript.src = `https://cse.google.com/cse.js?cx=${cx}`;
    gcseScript.async = true;
    document.body.appendChild(gcseScript);

    return () => {
      document.body.removeChild(gcseScript);
    };
  }, []);

  return (
    <Container>
      <BodyActual NavActual>
        <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>
        <div className='about-decoy'>
          RESOURCES
          <hr />
          <p>Search for more resources: (i.e. DV shelter 90501)</p>
          <div className="gcse-search"></div>
          
          <ResourceLinks />
        </div>
      </BodyActual>
    </Container>
  );
};

const ResourceLinks = () => (
  <>
    <ResourceLink title="NATIONAL DOMESTIC VIOLENCE HOTLINE: SPEAK/CHAT WITH AN ADVOCATE" url="https://www.thehotline.org/" />
    <ResourceLink title="988 SUICIDE AND CRISIS LIFELINE" url="https://988lifeline.org/" />
    <ResourceLink title="211: GENERAL INFORMATION (SHELTERS, MENTAL HEALTH, IMMIGRANT HELP)" url="https://www.211.org/" />
    <hr></hr><p>DEPARTMENT OF SOCIAL SERVICES: FOOD STAMPS/LOW-INCOME HEALTH INSURANCE/CASH AID</p> <br /> <p>[ varies by state - call 211 or search above ] </p>
    <ResourceLink title="STRONG HEARTS NATIVE AMERICAN HELP" url="http://strongheartshelpline.org/" />
    <ResourceLink title="WOMEN'S LAW: STATE-BY-STATE INFO ON LAWS INCLUDING RESTRAINING ORDERS/CHILD CUSTODY" url="https://www.womenslaw.org/" />
    <ResourceLink title="ABUSED DEAF WOMEN'S ADVOCACY SERVICES (ADWAS)" url="https://www.adwas.org/" />
  </>
);

const ResourceLink = ({ title, url }) => (
  <>
    <hr />
    <p>{title}</p>
    <br />
    <a href={url}>{url}</a>
  </>
);

export default ResourcesPage;
