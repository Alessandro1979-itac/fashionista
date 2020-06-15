import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './styles.css';

export default () => (
  <footer>
    <div className="container footer">
      <h3>
        E-commerce desenvolvido como projeto prático do curso AceleraDev React
        da{' '}
        <a
          href="https://codenation.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codenation
        </a>
      </h3>
      <h4 className="footer-author">
        Elaborado por Alessandro Muniz Caranha
      </h4>
      <div className="footer-links">
        <a
          href="https://github.com/Alessandro1979-itac/fashionista"
          target="_blank"
          rel="noopener noreferrer"
          className="actions__link"
        >
          <FaGithub /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/alessandro-muniz-caranha/"
          target="_blank"
          rel="noopener noreferrer"
          className="actions__link"
        >
          <FaLinkedin /> Linkedin
        </a>
      </div>
    </div>
  </footer>
);
