import "./Portfolio.css";
import { Fragment, Component } from "react";
import { Collapse, PageHeader, Button } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
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
      const currentProj = this.state.projects[key];
      console.log(currentProj.description);
      prep.push(
        <Panel header={currentProj.name} key={index}>
          <p>
            <strong>Description:</strong> {currentProj.description}
          </p>
          <p>
            <strong>
              <a href={currentProj.link}>Link</a>
            </strong>{" "}
            to the project!
          </p>
        </Panel>
      );
    });

    return (
      <div className="portfolio-wrapper">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)",
          }}
          title="Portfolio of Projects"
          subTitle="This is a list of my favorite projects. If you are interested in seeing more, checkout my github!"
          extra={[
            <Button type="primary" style={{ color: "white" }} key="3" href="/">
              Go Home
            </Button>,
            <Button
              type="primary"
              style={{ color: "white" }}
              key="4"
              href="https://github.com/rohitmusti"
            >
              My Github
            </Button>,
          ]}
        />
        <Collapse onChange={callback}>{prep}</Collapse>
      </div>
    );
  }
}

export default Portfolio;
