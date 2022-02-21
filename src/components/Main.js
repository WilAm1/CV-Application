import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import PersonalSection from "./PersonalInfo";
import Education from "./Education";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";

export default function Main(props) {
  const expInfo = {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    id: "",
  };
  const educInfo = {
    course: "",
    university: "",
    startDate: "",
    endDate: "",
    description: "",
    id: "",
  };

  const [personalInfo, setPersonalInfo] = useState({
    lName: "",
    fName: "",
    mName: "",
    jobTitle: "",
    address: "",
    number: "",
    email: "",
    description: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  // education: [this.educInfo],
  // experience: [this.expInfo],

  useEffect(() => {
    setPersonalInfo({
      ...props.staticModel.personalInfo,
    });
    setEducation(props.staticModel.education);
    setExperience(props.staticModel.experience);
  }, []);

  function handleAddWork() {
    setExperience(
      experience.concat({
        ...expInfo,
        id: uniqid(),
      })
    );
  }

  function handleWorkChange({ target }, idx) {
    const { value, name } = target;
    const copiedArray = experience.slice();
    copiedArray[idx] = { ...experience[idx], [name]: value };
    setExperience(copiedArray);
  }

  function handleDeleteWork(idx) {
    const copiedArray = experience.slice();
    copiedArray.splice(idx, 1);
    setExperience(copiedArray);
  }

  function handleAddEducation() {
    setEducation(
      education.concat({
        ...educInfo,
        id: uniqid(),
      })
    );
  }

  function handleEducationChange({ target }, idx) {
    const { value, name } = target;
    const modifiedArray = education.slice();
    modifiedArray[idx] = { ...education[idx], [name]: value };
    setEducation(modifiedArray);
  }

  function handleDeleteEducation(idx) {
    const modifiedArray = education.slice();
    modifiedArray.splice(idx, 1);
    setEducation(modifiedArray);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }

  return (
    <main>
      <section id="form">
        <PersonalSection
          person={personalInfo}
          handleChange={handleInputChange}
        />
        <Experience
          handleAddWork={handleAddWork}
          experience={experience}
          handleWorkChange={handleWorkChange}
          handleDeleteWork={handleDeleteWork}
        />
        <Education
          education={education}
          handleAddEducation={handleAddEducation}
          handleEducationChange={handleEducationChange}
          handleDeleteEducation={handleDeleteEducation}
        />
      </section>
      <Preview
        person={personalInfo}
        experience={experience}
        education={education}
      />
    </main>
  );
}
