import React, { Component } from "react";
import Input from "./utilities/InputBox";
import TextArea from "./utilities/TextArea";

export default class PersonalSection extends Component {
  render() {
    return (
      <section id="personal-section">
        <h3>Personal Information</h3>
        <div className="inputs-container">
          <Input
            value={this.props.data.lName}
            handleChange={this.props.handleChange}
            placeholder={"Last Name"}
            type={"text"}
            name={"lName"}
          />
          <Input
            value={this.props.data.fName}
            handleChange={this.props.handleChange}
            placeholder={"First Name"}
            type={"text"}
            name={"fName"}
          />
          <Input
            value={this.props.data.mName}
            handleChange={this.props.handleChange}
            placeholder={"Middle Name"}
            type={"text"}
            name={"mName"}
          />
          <Input
            value={this.props.data.jobTitle}
            handleChange={this.props.handleChange}
            placeholder={"Title"}
            type={"text"}
            name={"jobTitle"}
          />
          <Input
            value={this.props.data.address}
            handleChange={this.props.handleChange}
            placeholder={"Address"}
            type={"text"}
            name={"address"}
          />
          <Input
            value={this.props.data.number}
            handleChange={this.props.handleChange}
            placeholder={"Phone Number"}
            type={"number"}
            name={"number"}
          />
          <Input
            value={this.props.data.email}
            handleChange={this.props.handleChange}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
          />

          <TextArea
            value={this.props.data.description}
            handleChange={this.props.handleChange}
            placeholder={"Tells us about Yourself"}
            name={"description"}
          />
        </div>
      </section>
    );
  }
}
