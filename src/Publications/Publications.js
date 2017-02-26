import React from 'react';

import './styles.css';

import { VCRU } from './icons';

const Publications = () => (
  <div className="vintage part">
    <div className="container">
      <h2 className="heading">Публикации</h2>
      <a
        className="blog-link"
        href="https://vc.ru/paper/author/vladislavkozulya"
      >
        <svg
          className="blog-link__icon"
          viewBox="0 404.142 36 33.608"
        >
          <path d={VCRU} />
        </svg>
      </a>
    </div>
  </div>
);

export default Publications;
