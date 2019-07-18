import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2.5),
            paddingTop: rhythm(1)
          }}
        >
          <div style={{ float: "right" }}>
            <a href="/feed/index.xml">RSS</a>
          </div>
          <a href="https://twitter.com/anglepoised" rel="me">
            Twitter
          </a>{" "}
          &bull;{" "}
          <a href="https://github.com/anglepoised" rel="me">
            GitHub
          </a>{" "}
          &bull; <a href="https://pinboard.in/u:anglepoised">Pinboard</a> &bull;{" "}
          <a href="https://cv.anglepoised.com/" rel="me">
            CV
          </a>{" "}
          &bull;{" "}
          <a href="https://www.linkedin.com/in/paullove" rel="me">
            LinkedIn
          </a>
        </footer>
      </div>
    );
  }
}

export default Layout;
