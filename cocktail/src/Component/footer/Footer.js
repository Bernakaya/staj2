import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div>
          <p>Adres: Thirstybar, Ankara, Türkiye</p>
        </div>
        <p>Telefon: 0312 123 45 67</p>
        <p>E-posta: thirstybar@example.com</p>
        <p>Copyright © 2023 Thirstybar</p>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/thirstybar/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;