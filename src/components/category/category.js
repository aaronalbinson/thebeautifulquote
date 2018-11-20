import React from "react";

require("./category.scss");

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var hovereffectstyles = {
      backgroundColor: `${this.props.color}`
    };
    var imgBgColor = {
      backgroundColor: `${this.props.imgBgColor}`
    };
    return (
      <div>
        <div className="hovereffect" style={hovereffectstyles}>
          <a href={this.props.link}>
            <div className="imgContainer" style={imgBgColor}>
              <img
                className="img-responsive"
                src={this.props.image}
                alt={this.props.categoryName}
              />
            </div>
            <div className="overlay">
              <a className="overlayLink" href={this.props.link}>
                {this.props.showTitle ? <h2>{this.props.categoryName}</h2> : ""}
                <p>MORE</p>
              </a>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Category;