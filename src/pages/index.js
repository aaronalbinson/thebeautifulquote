import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="columns is-multiline">
            <div className="column is-3">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src="http://placehold.it/350x250"
                  alt=""
                />
                <div class="overlay">
                  <h2>Effect 12</h2>
                  <p>
                    <a href="#">LINK HERE</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
            <div className="column is-3">
              <a href="/tags/animals/">Pets</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="">
            <div className="content">
              {/* <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1> */}
            </div>
            <div className="columns is-multiline">
              {posts.map(({ node: post }) => (
                <div className="column is-3" key={post.id}>
                  <div className="thumbnail">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <img src={post.frontmatter.thumbnail} />
                    </Link>
                  </div>
                  <p>
                    <Link className="quote-title" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  {/* <p>
                    <Button onClick={this.handleOpen}>
                      <FontAwesomeIcon icon="shopping-cart" />
                    </Button>
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "quote" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            thumbnail
          }
        }
      }
    }
  }
`;
