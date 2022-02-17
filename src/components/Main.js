import React, { Component } from "react";
import Experience from "./Experience";
import PersonalSection from "./PersonalInfo";
import Education from "./Education";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.expInfo = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    };
    this.educInfo = {
      course: "",
      university: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    };

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
      education: [this.educInfo],
      experience: [this.expInfo],
    };
  }
  componentDidMount() {
    this.setState({
      ...this.props.staticModel,
    });
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

  handleAddEducation() {
    this.setState({
      education: this.state.education.concat({
        ...this.educInfo,
        id: uniqid(),
      }),
    });
  }

  handleEducationChange({ target }, idx) {
    const { value, name } = target;
    const expArray = this.state.education.slice();
    expArray[idx] = { ...this.state.education[idx], [name]: value };
    this.setState({
      education: expArray,
    });
  }

  handleDeleteEducation(idx) {
    const expArray = this.state.education.slice();
    expArray.splice(idx, 1);
    this.setState({
      education: expArray,
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
      <main>
        <section id="form">
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
          <Education
            education={this.state.education}
            handleAddEducation={this.handleAddEducation}
            handleEducationChange={this.handleEducationChange}
            handleDeleteEducation={this.handleDeleteEducation}
          />
        </section>
        <Preview
          person={this.state.personalInfo}
          experience={this.state.experience}
          education={this.state.education}
        />
      </main>
    );
  }
}
