import React, { Component } from "react";
import PersonalSection from "./components/PersonalInfo";
import Header from "./components/Header";
import Preview from "./components/Preview/Preview";

// TODO Add state to personal information(as it is not replicable)
// TODO Modify Handle InputChange
// TODO Add Section dedicated for Personal Information/Details
// TODO Add Input data to the Preview
// TODO Array state for Work Experience and Education

export default class App extends Component {
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      // Or use ...spread operator
      personalInfo: Object.assign({}, this.state.personalInfo, {
        [name]: value,
      }),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalSection
          data={this.state.personalInfo}
          handleChange={this.handleInputChange}
        />
        <Preview value={this.state.personalInfo.lName.text} />
      </div>
    );
  }
}
