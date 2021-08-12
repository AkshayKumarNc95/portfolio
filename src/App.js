import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import basicData from "./data/data.json";
import detailedData from "./data/OtherInfo.json";

class App extends Component {
  state = {
    detailedInfo: {},
    basicInfo: {},
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ basicInfo: basicData, detailedInfo: detailedData });
  }

  render() {
    return (
      <div>
        <Header basicInfo={this.state.basicInfo.basic_info} />
        <About
          resumeBasicInfo={this.state.detailedInfo.basic_info}
          sharedBasicInfo={this.state.basicInfo.basic_info}
        />
        <Projects
          resumeProjects={this.state.detailedInfo.projects}
          resumeBasicInfo={this.state.detailedInfo.basic_info}
        />
        <Skills
          sharedSkills={this.state.basicInfo.skills}
          resumeBasicInfo={this.state.detailedInfo.basic_info}
        />
        <Experience
          resumeExperience={this.state.detailedInfo.experience}
          resumeBasicInfo={this.state.detailedInfo.basic_info}
        />
        <Footer sharedBasicInfo={this.state.basicInfo.basic_info} />
      </div>
    );
  }
}

export default App;
