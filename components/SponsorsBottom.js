import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const sponsors = [
  {
    name: "Jerovetz Motorsports Shock Service",
    url: "http://jmshocks.com/",
    imgClass: "sponsorsjerovetz",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAD5AQMAAADLK3evAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAChJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAgC8DRBYAAVJxJ2UAAAAASUVORK5CYII=",
  },
  {
    name: "The Outback Tavern",
    imgClass: "sponsorsoutback",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAADiAQMAAACiOoX3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACZJREFUeNrtwTEBAAAAwqD1T20JT6AAAAAAAAAAAAAAAAAAAAB4Gz3MAAGWyP6UAAAAAElFTkSuQmCC",
  },
  {
    name: "Nick's Auto Parts",
    url: "http://nickscarquest.com/",
    imgClass: "sponsorsnicks",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAABxAQMAAAA5yOEaAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB9JREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAA4MUAHuYAAf8WRtYAAAAASUVORK5CYII=",
  },
  {
    name: "Demon Race Engines",
    imgClass: "sponsorsdemon",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAADxAQMAAAAnePXCAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACdJREFUeNrtwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAAAAAA+BtB5gABauxTaAAAAABJRU5ErkJggg==",
  },
  {
    name: "Kroll Racing Fabrication",
    imgClass: "sponsorskroll",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAEhAQMAAACTMeJZAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACpJREFUeNrtwTEBAAAAwqD1T20LL6AAAAAAAAAAAAAAAAAAAAAAAAAA4GVPBgABvyf/VAAAAABJRU5ErkJggg==",
  }
];

const SponsorsBottom = () => (
    <Row className="align-items-center">
      {sponsors.map((sponsor, index) => (
        <Col key={index} sm className="text-center my-3">
          {sponsor.url ? (
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                className={`${sponsor.imgClass}`}
                alt={sponsor.name}
                src={sponsor.imgSrc}
              fluid />
            </a>
          ) : (
            <Image
              className={`${sponsor.imgClass}`}
              alt={sponsor.name}
              src={sponsor.imgSrc}
            fluid />
          )}
        </Col>
      ))}
    </Row>
);

export default SponsorsBottom;
