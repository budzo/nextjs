import { Row, Col, Image } from 'react-bootstrap';

const sponsors = [
  {
    name: "Gnome Games",
    url: "http://gnomegames.com/",
    imgClass: "sponsorsgnome",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAEFAQMAAAAPDKV5AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAChJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAAAAAAAAAAAAAAAAALwZR14AAefYhy8AAAAASUVORK5CYII=",
  },
  {
    name: "Swift Springs",
    url: "http://swiftsprings.com/",
    imgClass: "sponsorsswift",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAB7AQMAAACYU8J8AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB9JREFUeNrtwTEBAAAAwqD1T20KP6AAAAAAAAAAAPgaIaIAAeYsPusAAAAASUVORK5CYII=",
  },
  {
    name: "Vlies Custom Race Car Bodies",
    url: "http://vliesracebodies.com/",
    imgClass: "sponsorsvlies",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAC1AQMAAACzsb24AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACNJREFUeNrtwYEAAAAAw6D5U5/gBlUBAAAAAAAAAAAAAADwDTF+AAGtAv5fAAAAAElFTkSuQmCC",
  },
  {
    name: "1330 Wraps",
    url: "http://1330wraps.com/",
    imgClass: "sponsors1330",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAB/AQMAAAADwoBqAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB9JREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAOBhIroAATcg/pAAAAAASUVORK5CYII=",
  },
  {
    name: "Jet Finishing and Woodwork",
    url: "http://jetwoodwork.com/",
    imgClass: "sponsorsjet",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAE/AQMAAACq7YGyAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAC1JREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAADgyQBXOgABJq89RgAAAABJRU5ErkJggg==",
  }
];

const SponsorsTop = () => (
    <Row className="align-items-center">
      {sponsors.map((sponsor, index) => (
        <Col key={index} sm className="text-center my-3">
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <Image
              className={`${sponsor.imgClass}`}
              alt={sponsor.name}
              src={sponsor.imgSrc}
            fluid />
          </a>
        </Col>
      ))}
    </Row>
);

export default SponsorsTop;
