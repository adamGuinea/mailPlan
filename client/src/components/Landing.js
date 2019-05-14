import React from "react";
import "../sass/main.scss";
import M from "materialize-css";
import LogoWhite from "../utils/images/logo-white.png";
import Email1 from "../utils/images/email-1.jpeg";
import Email2 from "../utils/images/email-2.png";
import Email3 from "../utils/images/email-3.jpg";
import Person1 from "../utils/images/person-1.jpg";
import Person2 from "../utils/images/person-2.jpg";
import VideoMp4 from "../utils/images/Concrete_Jungle.mp4";
import VideoWebM from "../utils/images/Concrete_Jungle.webm";
import Work1 from "../utils/images/work-1.jpg";
import Work2 from "../utils/images/work-2.jpg";

let Href = "#";

class Landing extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  closeNav = () => {
    document.getElementById("navi-toggle").checked = false;
  };

  renderHero() {
    return (
      <React.Fragment>
        <div className="navigation scrollspy" id="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <div className="navigation__nav">
            <ul className="navigation__list" onClick={this.closeNav}>
              <li className="navigation__item">
                <a href="#about" className="navigation__link">
                  <span>01</span>About MailPlan
                </a>
              </li>
              <li className="navigation__item">
                <a href="#features" className="navigation__link">
                  <span>02</span>Information
                </a>
              </li>
              <li className="navigation__item">
                <a href="#tech" className="navigation__link">
                  <span>03</span>Tech Stack
                </a>
              </li>
              <li className="navigation__item">
                <a href="#stories" className="navigation__link">
                  <span>04</span>Our Customers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <header className="header">
          <div className="header__logo-box">
            <img src={LogoWhite} alt="Logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">MailPlan</span>
              <span className="heading-primary--sub">
                Collect feedback from your users
              </span>
            </h1>
            <a
              href="/auth/google"
              className="button button--white button--animated"
            >
              Log in
            </a>
          </div>
        </header>

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary scrollspy" id="about">
                Create your own marketing campaign
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Create an account and start using MailPlan now to boost your
                  product sales.
                </h3>
                <p className="paragraph">
                  The API allows emails to be sent to multiple email addresses
                  and allows reply functionality once a customer clicks the
                  Yes/No option.
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  High performance, high availability and automatic scaling of
                  data by Mongo DB.
                </h3>
                <p className="paragraph">
                  This is useful for tracking Surveys. Users can not only send
                  Surveys but also track the responses they have received on a
                  given Survey.
                </p>
                <a
                  href="https://github.com/adamGuinea/mailPlan"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="button-text"
                >
                  Instructions &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={Email1}
                    alt="Email-pic"
                    className="composition__photo composition__photo--p1"
                  />

                  <img
                    src={Email2}
                    alt="Email"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={Email3}
                    alt="Email"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-features scrollspy">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box scrollspy" id="features">
                  <i className="feature-box__icon material-icons">
                    credit_card
                  </i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    We use Stripe to mock payments
                  </h3>
                  <p className="feature-box__text">
                    No real payments are accepted. Please use the test credit
                    card provided
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon material-icons">
                    {" "}
                    shopping_cart
                  </i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Each survey costs 1 credit{" "}
                  </h3>
                  <p className="feature-box__text">
                    Once a user has enough credits they can start sending
                    surveys
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon material-icons">equalizer</i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Gain insight with Webhooks
                  </h3>
                  <p className="feature-box__text">
                    The API allows emails to be sent to multiple email addresses
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon material-icons">code</i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Sign up with Google
                  </h3>
                  <p className="feature-box__text">
                    No need for a new password. Login and authentication is
                    handled by Passport.JS
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tech">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary scrollspy" id="tech">
                Technologies we use
              </h2>
            </div>

            <div className="row" id="popup-target">
              <div className="col-1-of-3">
                <div className="cards">
                  <div className="cards__side cards__side--front">
                    <div className="cards__picture cards__picture--1">
                      &nbsp;
                    </div>
                    <h4 className="cards__heading">
                      <span className="cards__heading-span cards__heading-span--1">
                        Mongo Database
                      </span>
                    </h4>
                    <div className="cards__details">
                      <ul>
                        <li>Easy to scale</li>
                        <li>Deep query ability</li>
                        <li>Professional support</li>
                        <li>Fast in-place updates</li>
                        <li>No complex joins</li>
                      </ul>
                    </div>
                  </div>
                  <div className="cards__side cards__side--back cards__side--back-1">
                    <div className="cards__cta">
                      <div className="cards__price-box">
                        <p className="cards__price-only">Yours</p>
                        <p className="cards__price-value">Free</p>
                      </div>
                      <a href="#popup" className="button button--white">
                        Documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="cards">
                  <div className="cards__side cards__side--front">
                    <div className="cards__picture cards__picture--2">
                      &nbsp;
                    </div>
                    <h4 className="cards__heading">
                      <span className="cards__heading-span cards__heading-span--2">
                        Stripe Payments
                      </span>
                    </h4>
                    <div className="cards__details">
                      <ul>
                        <li>Great analytics and reporting</li>
                        <li>Easy integration</li>
                        <li>No refund charges</li>
                        <li>Seamless checkout</li>
                        <li>Keeps your data safe</li>
                      </ul>
                    </div>
                  </div>
                  <div className="cards__side cards__side--back cards__side--back-2">
                    <div className="cards__cta">
                      <div className="cards__price-box">
                        <p className="cards__price-only">Yours</p>
                        <p className="cards__price-value">Free</p>
                      </div>
                      <a href="#popup" className="button button--white">
                        Documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="cards">
                  <div className="cards__side cards__side--front">
                    <div className="cards__picture cards__picture--3">
                      &nbsp;
                    </div>
                    <h4 className="cards__heading">
                      <span className="cards__heading-span cards__heading-span--3">
                        SendGrid Webhooks
                      </span>
                    </h4>
                    <div className="cards__details">
                      <ul>
                        <li>Pay as you go</li>
                        <li>Rapid implementation</li>
                        <li>Easy updates</li>
                        <li>Automates repetitive tasks</li>
                        <li>Lower marketing costs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="cards__side cards__side--back cards__side--back-3">
                    <div className="cards__cta">
                      <div className="cards__price-box">
                        <p className="cards__price-only">Yours</p>
                        <p className="cards__price-value">Free</p>
                      </div>
                      <a href="#popup" className="button button--white">
                        Documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="/auth/google" className="button button--red">
                Login with Google
              </a>
            </div>
          </section>

          <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={VideoMp4} type="video/mp4" />
                <source src={VideoWebM} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary scrollspy" id="stories">
                Customer Testimonials
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={Person1}
                    alt="person testimonial"
                    className="story__img"
                  />
                  <figcaption className="story__caption">John Adams</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    It was the landing page that drew me in
                  </h3>
                  <p>
                    This is the first I've heard of MailPlan but if I could
                    recommend you one tool for managing your marketing
                    campaigns, it'd be MailPlan. It was so quick to get up and
                    running and now I can correspond with customers in a
                    fraction of the time it used to take me each day.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={Person2}
                    alt="person testimonial"
                    className="story__img"
                  />
                  <figcaption className="story__caption">Humphrey</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I really can learn new tricks
                  </h3>
                  <p>
                    When I first told my friends I was looking for a streamlined
                    way to manage my online presence they thought I was crazy,
                    because I'm a dog lol. MailPlan have been great though and
                    their support has left me more time for the things that
                    really matter.
                  </p>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#navigation" className="button-text">
                Back to top &uarr;
              </a>
            </div>
          </section>
        </main>
        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img src={Work1} alt="work" className="popup__img" />
              <img src={Work2} alt="work" className="popup__img" />
            </div>
            <div className="popup__right">
              <a href="#popup-target" className="popup__close">
                &times;
              </a>
              <h2 className="heading-secondary u-margin-bottom-small">
                Open source
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read
              </h3>
              <p className="popup__text">
                This project has been adapted from what I learned in Jonas
                Schmedtmann's Advanced CSS and SASS course. This page is built
                almost entirely in SASS. The React side of this app comes from
                what I learned in Stephen Grider's full stack React and Redux
                courses. They have been great teachers.
              </p>
              <a
                href="https://github.com/adamGuinea/mailPlan"
                rel="noopener noreferrer"
                target="_blank"
                className="button button--red"
              >
                Project repo
              </a>
            </div>
          </div>
          <a href={Href} className="popup__close--outer">
            &nbsp;
          </a>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderHero()}</React.Fragment>;
  }
}

export default Landing;
