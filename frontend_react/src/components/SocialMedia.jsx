import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/wong-yew-keong/'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/WongYewKeong'>
      <BsGithub />
      </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
  </div>
);

export default SocialMedia;