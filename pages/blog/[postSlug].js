import Head from "next/head";
import NavbarExample from "../../components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getPostSlugs, getSinglePost } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);

    return {
        props: {
            postData,
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <>
        <NavbarExample />
            <Head>
                <title key="pageTitle">{postData.title}</title>
                <meta name="description" content={postData.excerpt} key="metaDescription"></meta>
            </Head>
            <Container>
                <Row>
                    <Col>
                        <h1>{postData.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: postData.content}} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}