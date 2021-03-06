import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Category from "../components/category/category";

import Animals from "../img/animals.png";
import Funny from "../img/funny.png";
import Students from "../img/students.png";
import Sports from "../img/sports.png";
import FoodDrink from "../img/fooddrink.png";
import Love from "../img/love.png";
import Music from "../img/music.png";
import Like from "../img/like.png";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section categories">
          <div className="columns is-multiline is-desktop">
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Animals}
                categoryName="Animals"
                link="/tags/animal/"
                color="#61a13e"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Funny}
                categoryName="Jokes"
                link="/tags/joke/"
                color="#5d77a0"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Students}
                categoryName="Student quotes"
                link="/tags/student/"
                color="#a04f5e"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Sports}
                categoryName="Sports"
                link="/tags/sport/"
                color="#a29b1f"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={FoodDrink}
                categoryName="Food & Drink quotes"
                link="/tags/food-and-drink/"
                color="#a04f5e"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={false}
                image={Like}
                categoryName="Like on Facebook"
                link="https://www.facebook.com/thebeautquote/"
                color="#3a4174"
                more="Like us on Facebook"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Love}
                categoryName="Love Quotes"
                link="/tags/love/"
                color="#c225e3"
              />
            </div>
            <div className="column is-3-desktop is-3-tablet is-6-mobile">
              <Category
                showTitle={true}
                image={Music}
                categoryName="Music Quotes"
                link="/tags/animals/"
                color="#e38f4c"
              />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="">
            <div className="content">
              {/* <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1> */}
            </div>
            <div className="columns is-multiline is-desktop">
              {posts.map(({ node: post }) => (
                <div
                  className="column is-3-desktop is-3-tablet is-6-mobile"
                  key={post.id}
                >
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
