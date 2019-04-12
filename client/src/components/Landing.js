import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceInLeft, flipInX } from "react-animations";
import Loader from "../utils/Loader";

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounceInLeft}`} backwards 1s;
`;

const FlipIn = styled.div`
  animation: 1.5s ${keyframes`${flipInX}`};
`;

class Landing extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  renderHero() {
    if (this.state.loading) return <Loader />;
    return (
      <React.Fragment>
        <section className="home-hero">
          <div>
            <FlipIn>
              <h1 style={{ fontFamily: '"Pacifico", cursive' }}>MailPlan</h1>
            </FlipIn>
            <Bounce>
              <p style={{ fontSize: "16px" }}>
                Create your own email marketing campaign and collect feedback
                from your users
              </p>
            </Bounce>
          </div>
          <a href="#about" className="white-text">
            <i className="material-icons medium scroll-icon">
              arrow_drop_down_circle
            </i>
          </a>
        </section>

        <section className="section">
          <div className="container">
            <div className="row flex" id="about">
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="fa fa-user fa-3x deep-purple-text text-darken-2" />
                  <h5 className="grey-text text-darken-4">Free Account</h5>
                  <p>
                    Create an account and start using MailPlan now to boost your
                    product sales.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="fa fa-database fa-3x deep-purple-text text-darken-2" />
                  <h5 className="grey-text text-darken-4">NoSQL Databases</h5>
                  <p>
                    High performance, high availabilty and automatic scaling of
                    data provided by our Mongo Database.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="fa fa-envelope fa-3x deep-purple-text text-darken-2" />
                  <h5 className="grey-text text-darken-4">Fast Connections</h5>
                  <p>
                    Eliminate the complexity of sending large scale corporate
                    emails with our SendGrid API.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  // renderInfo() {
  //   return (

  //   );
  // }

  render() {
    return (
      <React.Fragment>
        {this.renderHero()}

        {/* {this.renderInfo()} */}
      </React.Fragment>
    );
  }
}

export default Landing;
