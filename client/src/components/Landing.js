import React from "react";
import "../sass/main.scss";
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

// import styled, { keyframes } from "styled-components";
// import { bounceInLeft, flipInX } from "react-animations";
// import Loader from "../utils/Loader";

class Landing extends React.Component {
  renderHero() {
    return (
      <React.Fragment>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <navbars className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>About MailPlan
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>02</span>Information
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>03</span>Tech Stack
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>04</span>Our Customers
                </a>
              </li>
            </ul>
          </navbars>
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
            <a href="" className="button button--white button--animated">
              Discover
            </a>
          </div>
        </header>

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
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
                <a href="#section-tech" className="button-text">
                  Learn more &rarr;
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
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
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

          <section className="section-tech" id="section-tech">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Technologies we use</h2>
            </div>

            <div className="row">
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
                        Sendgrid Webhooks
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
              <h2 className="heading-secondary">Customer Testimonials</h2>
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
                    The landing page that drew me in
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
                    When I first told my friends that I was looking for a
                    streamlined way to manage my online presence they thought I
                    was crazy, because I'm a dog. MailPlan have been great with
                    their support and have left me more time for the things that
                    matter.
                  </p>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="button-text">
                Find out more &rarr;
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
              <a href="#section-tech" className="popup__close">
                &times;
              </a>
              <h2 className="heading-secondary .u-margin-bottom-small">
                Open source
              </h2>
              <h3 className="heading-tertiary .u-margin-bottom-small">
                Important &ndash; Please read
              </h3>
              <p className="popup__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                assumenda, sit nesciunt aut ad, perferendis quia obcaecati
                temporibus suscipit inventore nobis nemo impedit dolore magnam
                autem modi odit velit architecto!
              </p>
              <a href="#" className="button button--red">
                Check it out
              </a>
            </div>
          </div>
        </div>

        {/* <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">col 1 of 2</div>
            <div className="col-1-of-2">col 1 of 2</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">col 1 of 3</div>
            <div className="col-1-of-3">col 1 of 3</div>
            <div className="col-1-of-3">col 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-1-of-4">col 1 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-2-of-4">col 2 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">col 1 of 4</div>
            <div className="col-3-of-4">col 3 of 4</div>
          </div>
        </section> */}
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderHero()}</React.Fragment>;
  }
}

export default Landing;

// const Bounce = styled.div`
//   animation: 1s ${keyframes`${bounceInLeft}`} backwards 1s;
// `;

// const FlipIn = styled.div`
//   animation: 1.5s ${keyframes`${flipInX}`};
// `;

// class Landing extends React.Component {
//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ loading: false });
//     }, 2000);
//   }

//   renderHero() {
//     if (this.state.loading) return <Loader />;
//     return (
//       <React.Fragment>
//         <section className="home-hero">
//           <div>
//             <FlipIn>
//               <h1 style={{ fontFamily: '"Pacifico", cursive' }}>MailPlan</h1>
//             </FlipIn>
//             <Bounce>
//               <p style={{ fontSize: "16px" }}>
//                 Create your own email marketing campaign and collect feedback
//                 from your users
//               </p>
//             </Bounce>
//           </div>
//           <a href="#about" className="white-text">
//             <i className="material-icons medium scroll-icon">
//               arrow_drop_down_circle
//             </i>
//           </a>
//         </section>

//         <section className="info-section">
//           <div className="row" id="about">
//             <div className="col s12 m4 info">
//               <div className="card small">
//                 <i className="fa fa-user fa-3x deep-purple-text text-darken-2" />
//                 <h5>Free Account</h5>
//                 <p>
//                   Create an account and start using MailPlan now to boost your
//                   product sales.
//                 </p>
//               </div>
//             </div>
//             <div className="col s12 m4 info">
//               <div className="card small">
//                 <i className="fa fa-database fa-3x deep-purple-text text-darken-2" />
//                 <h5>NoSQL Databases</h5>
//                 <p>
//                   High performance, high availability and automatic scaling of
//                   data by Mongo DB.
//                 </p>
//               </div>
//             </div>
//             <div className="col s12 m4 info">
//               <div className="card small">
//                 <i className="fa fa-envelope fa-3x deep-purple-text text-darken-2" />
//                 <h5>Easy To Use</h5>
//                 <p>
//                   Eliminate the complexity of sending large scale corporate
//                   emails with our SendGrid API.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </React.Fragment>
//     );
//   }

//   render() {
//     return <React.Fragment>{this.renderHero()}</React.Fragment>;
//   }
// }

// export default Landing;
