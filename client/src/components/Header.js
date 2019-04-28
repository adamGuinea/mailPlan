import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import mail from "../utils/images/mail.jpg";
import Payments from "./Payments";

class Header extends Component {
  onRef = nav => {
    this.nav = nav;
    M.Sidenav.init(nav);
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/auth/google">Login with Google</a>
          </li>
        ];
      default:
        return [
          <li key="2">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4">
            <a href="/news">What's Trending</a>
          </li>,
          <li key="5">
            <a href="/api/logout">Log out</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan darken-1">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            <i
              className="material-icons large"
              style={{ width: "40px", height: "40px" }}
            >
              home
            </i>
          </Link>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="right sidenav-trigger hide-on-med-and-up"
            data-target="mobile-menu"
            style={{ marginLeft: "10px" }}
          >
            <i
              className="material-icons large"
              style={{ width: "40px", height: "40px" }}
            >
              menu
            </i>
          </Link>
          <ul className="right hide-on-small-and-down">
            {this.renderContent()}
          </ul>
          <ul
            ref={this.onRef}
            className="sidenav grey lighten-2"
            id="mobile-menu"
          >
            <li>
              <div className="background">
                <img src={mail} alt="mail" />
              </div>
            </li>
            <div className="container">{this.renderContent()}</div>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
