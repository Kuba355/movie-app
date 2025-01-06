import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Home</h4>
          <ul>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Movies</h4>
          <ul>
            <li><a href="#genres">Genres</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#top-rated">Top Rated</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shows</h4>
          <ul>
            <li><a href="#genres">Genres</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#top-rated">Top Rated</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Your Library</h4>
          <ul>
            <li><a href="#watchlist">You Want To Watch</a></li>
            <li><a href="#rating">Your Rating</a></li>
            <li><a href="#love-hate">You Love, You Hate</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Created by Anna, Kuba, Michał</p>
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;