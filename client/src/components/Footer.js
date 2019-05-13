import React from "react";

import mailPlanLogo from "../utils/images/mailplan-logo.png";
import "../sass/main.scss";

export default () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={mailPlanLogo} alt="mailplan logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="https://github.com/adamGuinea"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer__link"
                >
                  Github
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://linkedin.com/in/adamguinea/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://adamguinea.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer__link"
                >
                  Porfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            {new Date().getFullYear()} mailPlan - Adam Guinea
          </p>
        </div>
      </div>
    </footer>
  );
};
