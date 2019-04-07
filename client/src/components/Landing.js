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
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    let content;

    this.state.loading
      ? (content = (
          <div>
            <Loader />
          </div>
        ))
      : (content = (
          <div className="home-hero">
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
          </div>
        ));
    return content;
  }
}

export default Landing;
