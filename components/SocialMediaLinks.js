import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="fa-2x">
      <span className="fa-layers fa-fw">
        <a href="https://facebook.com/budzoracing" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faFacebookF} className="fa-inverse" transform="shrink-8" />
        </a>
      </span>
      <span className="fa-layers fa-fw">
        <a href="https://youtube.com/budzoracing" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faYoutube} className="fa-inverse" transform="shrink-8" />
        </a>
      </span>
      <span className="fa-layers fa-fw">
        <a href="https://instagram.com/budzoracing" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faInstagram} className="fa-inverse" transform="shrink-8" />
        </a>
      </span>
      <span className="fa-layers fa-fw">
        <a href="https://snapchat.com/add/budzoracing" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faSnapchatGhost} className="fa-inverse" transform="shrink-8" />
        </a>
      </span>
    </div>
  );
};

export default SocialMediaLinks;
