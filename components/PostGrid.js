import Link from 'next/link';
import { Image, Button } from 'react-bootstrap';
import { teko } from '../styles/fonts';
import styles from '../styles/latestnews.module.css';

function PostGrid({ post }) {
  return (
    <>
    <div className={styles.latestNewsPost}>
      <h3 className={`${teko.className} h2 text-uppercase`}><Link className="text-decoration-none" href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <Image className="mb-3" src={post.featuredImage.node.mediaDetails.sizes[3].sourceUrl} fluid />
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
      <Button className={`${teko.className} d-block text-uppercase fw-light`} variant="dark" size="lg" href={`/blog/${post.slug}`}>View Full Report</Button>
    </div>
    </>
  );
}

export default PostGrid;