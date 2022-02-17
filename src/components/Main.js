import React, { Component } from "react";
import Experience from "./Experience";
import PersonalSection from "./PersonalInfo";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";

// * Add state to personal information(as it is not replicable)
// * Modify Handle InputChange
// * Add Section dedicated for Personal Information/Details
// TODO Array state for Work Experience and Education
// TODO Education
// TODO Add Input data to the Preview
// TODO Add Styles

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        lName: "",
        fName: "",
        mName: "",
        jobTitle: "",
        address: "",
        number: "",
        email: "",
        description: "",
      },
      education: [],
      experience: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
    this.expInfo = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    };
  }

  handleAddWork() {
    this.setState({
      experience: this.state.experience.concat({
        ...this.expInfo,
        id: uniqid(),
      }),
    });
  }

  handleWorkChange({ target }, idx) {
    const { value, name } = target;
    const expArray = this.state.experience.slice();
    expArray[idx] = { ...this.state.experience[idx], [name]: value };
    this.setState({
      experience: expArray,
    });
  }
  handleDeleteWork(idx) {
    const expArray = this.state.experience.slice();
    expArray.splice(idx, 1);
    this.setState({
      experience: expArray,
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      // Or use Object.assign({}, this.state.personalInfo, {[name]: value,})
      personalInfo: { ...this.state.personalInfo, [name]: value },
    });
  }

  render() {
    return (
      <div>
        <PersonalSection
          data={this.state.personalInfo}
          handleChange={this.handleInputChange}
        />
        <Experience
          handleAddWork={this.handleAddWork}
          experience={this.state.experience}
          handleWorkChange={this.handleWorkChange}
          handleDeleteWork={this.handleDeleteWork}
        />
        <Preview
          person={this.state.personalInfo}
          experience={this.state.experience}
        />
      </div>
    );
  }
}
