import React, { Component } from "react";
import PersonalSection from "./PersonalInfo";
import Preview from "./Preview/Preview";

// * Add state to personal information(as it is not replicable)
// * Modify Handle InputChange
// *
// * Add Section dedicated for Personal Information/Details
// TODO Array state for Work Experience and Education
// TODO Add Input data to the Preview

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
        <Preview value={this.state.personalInfo.lName.text} />
      </div>
    );
  }
}
