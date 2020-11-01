import "./Portfolio.css";
import { Fragment, Component } from "react";
import { Card, Col, Row, Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    let projectData = require("../../assets/projects.json");
    this.state = {
      projects: projectData,
    };
  }

  render() {
    let prep = [];
    Object.keys(this.state.projects).map((key, index) => {
      let currentProj = this.state.projects[key];
      prep.push(
        <div className="contentStyle">
          <h3>{currentProj.name}</h3>
          <a href={currentProj.link}>Link</a>
          <p style={{ color: "white" }}>{currentProj.description}</p>
        </div>
      );
    });

    return <Carousel afterChange={onChange}>{prep}</Carousel>;
  }
}

export default Portfolio;
