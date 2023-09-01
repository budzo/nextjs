import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../lib/posts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarExample from '../components/navbar';
import FeaturedImage from '../components/FeaturedImage';
import CardExample from '../components/Card';
import { getInfo } from '../lib/info';

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  const allInfo = await getInfo();

  return {
    props: {
      allPosts: allPosts,
      allInfo: allInfo,
    },
  }
}

export default function Home ({ allPosts, allInfo }) {
   return (
    <>
    <NavbarExample />
      <Head>
        <title>{allInfo.generalSettingsTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={allInfo.generalSettingsDescription} />
      </Head>
      <Container>
        <Row>
          {
            allPosts.nodes.map((post) => (
              <Col key={post.slug} md={4}>
                <CardExample post={post} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
   );
}

