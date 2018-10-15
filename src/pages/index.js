import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

library.add(faShoppingCart);

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              {/* <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1> */}
            </div>
            <div className="columns is-multiline">
              {posts.map(({ node: post }) => (
                <div
                  className="column is-3"
                  style={{ border: "1px solid #eaecee" }}
                  key={post.id}
                >
                  <div className="thumbnail">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <img src={post.frontmatter.thumbnail} />
                    </Link>
                  </div>
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
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
            purchaselink
          }
        }
      }
    }
  }
`;
