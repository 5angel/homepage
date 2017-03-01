import React from 'react';

import './styles.css';

import photo from './photo.jpg';
import linkedin from './linkedin.svg';

import Intro from './Intro';

const Welcome = () => (
  <div className="welcome">
    <div className="container">
      <header className="welcome__header">
        <Intro />
        <h1>Владислав Козуля</h1>
        <h2>Lead JavaScript Developer,<br />UI/UX Designer & PM*</h2>
        <a
          className="cv-link"
          href="https://linkedin.com/in/govnokoder"
        >
          <img
            className="cv-link__icon"
            src={linkedin}
            alt="LinkedIn"
          />
          govnokoder
        </a>
      </header>
      <img
        className="welcome__photo"
        src={photo}
        alt="Козуля"
      />
      <div className="welcome__hint">*а также автор большого числа несмешных мемов</div>
    </div>
  </div>
);

export default Welcome;
