import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Category from "../components/category/category";

require("../templates/tags.scss");

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <div className="column is-3">
        <Category
          showtitle={false}
          image={post.node.frontmatter.thumbnail}
          categoryName={post.node.frontmatter.title}
          link={post.node.fields.slug}
          color="#3a4075"
          imgBgColor="#FFFFFF"
        />
      </div>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} quote${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <div className="tag-header">
          <h2>{tag} Quotes</h2>
        </div>
        <section className="section categories">
          <div className="columns is-multiline">{postLinks}</div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
          }
        }
      }
    }
  }
`;
