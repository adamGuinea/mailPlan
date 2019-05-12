import React from "react";
import "../sass/main.scss";
import LogoWhite from "../utils/images/logo-white.png";

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
