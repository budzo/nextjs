import Head from 'next/head';
import { getAllPosts } from '../lib/posts';
import { getAllEvents } from '../lib/events';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNavbar from '../components/MainNavbar';
import PostGrid from '../components/PostGrid';
import EventGrid from '../components/EventGrid';
import { getInfo } from '../lib/info';
import SponsorsTop from '../components/SponsorsTop';
import SponsorsBottom from '../components/SponsorsBottom';
import Footer from '../components/Footer';
import latestNewsStyles from '../styles/latestnews.module.css';
import upcomingRacesStyles from '../styles/upcomingraces.module.css';
import sponsorsStyles from '../styles/sponsors.module.css';
import { teko } from '../styles/fonts';

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  const allEvents = await getAllEvents();
  const allInfo = await getInfo();

  return {
    props: {
      allPosts: allPosts,
      allEvents: allEvents,
      allInfo: allInfo,
    },
  }
}

export default function Home ({ allPosts, allEvents, allInfo }) {
   return (
    <>
    <MainNavbar />
      <Head>
        <title>{allInfo.generalSettingsTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={allInfo.generalSettingsDescription} />
      </Head>
      <section className={latestNewsStyles.latestNews}>
        <h1 className={`${teko.className} text-uppercase`}>Latest News</h1>
        <Container className={latestNewsStyles.latestNewsContainer} fluid>
          <Row>
            {
              allPosts.nodes.map((post) => (
                <Col className="text-center" key={post.slug} lg={4}>
                  <PostGrid post={post} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className={upcomingRacesStyles.upcomingRaces}>
        <h2 className={`${teko.className} text-uppercase`}>Upcoming Races</h2>
        <Container className={`${upcomingRacesStyles.upcomingRacesContainer} text-center`} fluid>
          <Row>
            {
              allEvents.nodes.map((event) => (
                <Col className="text-center" key={event.slug} sm>
                  <EventGrid event={event} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className={sponsorsStyles.sponsors}>
        <h2 className={`${teko.className} text-uppercase`}>Sponsors</h2>
        <Container className={`${sponsorsStyles.sponsorsContainer} text-center`} fluid>
          <SponsorsTop />
          <SponsorsBottom />
        </Container>
      </section>
      <Footer />
    </>
   );
}

