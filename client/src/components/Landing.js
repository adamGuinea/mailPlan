import React from "react";
import "../sass/main.scss";
import LogoWhite from "../utils/images/logo-white.png";
import Email1 from "../utils/images/email-1.jpeg";
import Email2 from "../utils/images/email-2.png";
import Email3 from "../utils/images/email-3.jpg";

// import styled, { keyframes } from "styled-components";
// import { bounceInLeft, flipInX } from "react-animations";
// import Loader from "../utils/Loader";

class Landing extends React.Component {
  renderHero() {
    return (
      <React.Fragment>
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
            <a href="#" className="button button--white button--animated">
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
                <a href="#" className="button-text">
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
                    alt="Email-pic"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={Email3}
                    alt="Email-pic"
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
                  <i className="feature-box__icon material-icons">code</i>
                  <h3 className="heading-tertiary">
                    MailPlan uses Stripe to mock payments
                  </h3>
                  <p className="feature-box__text">
                    No real payments are accepted. Use test credit card number
                    4242 4242 4242 4242 on the modal
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
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
