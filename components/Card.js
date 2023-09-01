import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function CardExample({ post }) {
  return (
    <Card border="primary" className="my-3">
      <Card.Img variant="top" src={post.featuredImage.node.mediaDetails.sizes[3].sourceUrl} />
      <Card.Body>
        <Card.Title><Link href={`/blog/${post.slug}`}>{post.title}</Link></Card.Title>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}>
          
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardExample;