import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const QuoteTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail,
  shirtimage,
  amzusa,
  amzusaprice,
  amzuk,
  amzukprice,
  amzde,
  amzdeprice,
  redbubble,
  redbubbleprice,
  redbubbleother
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-3">
            <img src={thumbnail} />
          </div>
          <div className="column is-7 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-3">
            <img src={shirtimage} />
          </div>
          <div className="column is-7 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              Get the quote on a t-shirt
            </h1>
            <ul>
              <li>
                <a className="button" href={amzusa}>
                  Amazon US <span className="price"> {" " + amzusaprice}</span>
                </a>
              </li>
              <li>
                <a className="button" href={amzuk}>
                  <span>Amazon UK </span>
                  <span className="price"> {amzukprice}</span>
                </a>
              </li>
              <li>
                <a className="button" href={amzde}>
                  Amazon DE <span className="price"> {amzdeprice}</span>
                </a>
              </li>
              <li>
                <a className="button" href={redbubble}>
                  Redbubble
                  <span className="price"> {redbubbleprice}</span>
                </a>
              </li>
              <br />
              <li>
                <a className="link" href={redbubbleother}>
                  Find this quote on other designs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

QuoteTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const Quote = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <QuoteTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        thumbnail={post.frontmatter.thumbnail}
        shirtimage={post.frontmatter.shirtimage}
        amzusa={post.frontmatter.amzusa}
        amzusaprice={post.frontmatter.amzusaprice}
        amzuk={post.frontmatter.amzuk}
        amzukprice={post.frontmatter.amzukprice}
        amzde={post.frontmatter.amzde}
        amzdeprice={post.frontmatter.amzdeprice}
        redbubble={post.frontmatter.redbubble}
        redbubbleprice={post.frontmatter.redbubbleprice}
        redbubbleother={post.frontmatter.redbubbleother}
      />
    </Layout>
  );
};

Quote.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Quote;

export const pageQuery = graphql`
  query QuoteByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail
        shirtimage
        amzusa
        amzusaprice
        amzuk
        amzukprice
        amzde
        amzdeprice
        redbubble
        redbubbleprice
        redbubbleother
      }
    }
  }
`;
