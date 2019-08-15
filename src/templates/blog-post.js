import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteUrl = this.props.data.site.siteMetadata.siteUrl;
    const { previous, next } = this.props.pageContext;
    const postUrl = siteUrl + post.fields.slug;
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const dateLocal = new Date(post.frontmatter.date).toLocaleDateString(
      "en-GB",
      dateOptions
    );

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="h-entry">
          <h1
            className="p-name"
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <a href={postUrl} className="u-url">
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1)
              }}
            >
              <time className="dt-published" dateTime={post.frontmatter.date}>
                {dateLocal}
              </time>
            </p>
          </a>
          <div
            className="e-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {post.frontmatter.tags ? (
            <div>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1)
                }}
              >
                Posted in: {post.frontmatter.tags.join(", ")}
              </p>
            </div>
          ) : null}
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <Bio />
        </article>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        tags
      }
    }
  }
`;
