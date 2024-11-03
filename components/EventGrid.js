import Link from 'next/link';
import { Image, Button } from 'react-bootstrap';
import { teko } from '../styles/fonts';

function EventGrid({ event }) {
  return (
    <>
      <Image className="mb-3" src={event.featuredImage.node.sourceUrl} alt={event.featuredImage.node.altText} fluid />
      <div className={`${teko.className} text-uppercase`} dangerouslySetInnerHTML={{ __html: event.content }}></div>
    </>
  );
}

export default EventGrid;