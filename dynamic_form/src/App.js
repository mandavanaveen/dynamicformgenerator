import React, { useState } from "react";
import "./App.css";
import Namefield from "./components/Namefield";
import Numberfield from "./components/Numberfield";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Socialmedia from "./components/Socialmedia";

function App() {
  //namefield
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  //numberfield
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  //education
  const [isStudying, setIsStudying] = useState(false);
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [percentage, setPercentage] = useState("");
  const [graduatedYear, setGraduatedYear] = useState("");

  const handleGraduation = (value) => {
    setIsStudying(value === "Yes" ? true : false);
  };

  //experience
  const [hasExperience, setHasExperience] = useState(false);
  const [experienceYears, setExperienceYears] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [selectedGovernmentIdCategory, setSelectedGovernmentIdCategory] =
    useState(0);
  const [governmentIdNumber, setGovernmentIdNumber] = useState("");

  //socialmedia
  const [fields, setFields] = useState([{ id: 1, label: "", value: "" }]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddField = () => {
    setIdCounter(idCounter + 1);
    setFields([...fields, { id: idCounter + 1, label: "", value: "" }]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, field, event) => {
    const newFields = [...fields];
    const index = newFields.findIndex((field) => field.id === id);
    newFields[index][field] = event.target.value;
    setFields(newFields);
  };

  //submit
  const handleSubmit = () => {
    // Collect form data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      country: country,
      state: state,
      city: city,
      isStudying: isStudying,
      email: email,
      institution: institution,
      percentage: percentage,
      graduatedYear: graduatedYear,
      hasExperience: hasExperience,
      experienceYears: experienceYears,
      experienceDescription: experienceDescription,
      selectedGovernmentIdCategory: selectedGovernmentIdCategory,
      governmentIdNumber: governmentIdNumber,
      fields: fields,
    };

    const jsonData = JSON.stringify(formData);
    localStorage.setItem("formData", jsonData);
    // console.log(jsonData);
  };

  return (
    <div className="bg-gradient-to-r from-violet-950 to-black/80 animate-gradient">
      <div className="App flex flex-col w-4/5 pl-80">
        <h1 className="text-4xl text-white flex py-4 justify-center h-[70px] font-bold">
          Dynamic Form Generator
        </h1>
        <Namefield
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />

        <Numberfield
          phoneNumber={phoneNumber}
          country={country}
          state={state}
          city={city}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleCountryChange={handleCountryChange}
          handleStateChange={handleStateChange}
          handleCityChange={handleCityChange}
        />
        <Education
          isStudying={isStudying}
          handleGraduation={handleGraduation}
          email={email}
          setEmail={setEmail}
          institution={institution}
          setInstitution={setInstitution}
          percentage={percentage}
          setPercentage={setPercentage}
          graduatedYear={graduatedYear}
          setGraduatedYear={setGraduatedYear}
        />
        <Experience
          hasExperience={hasExperience}
          setHasExperience={setHasExperience}
          experienceYears={experienceYears}
          setExperienceYears={setExperienceYears}
          experienceDescription={experienceDescription}
          setExperienceDescription={setExperienceDescription}
          selectedGovernmentIdCategory={selectedGovernmentIdCategory}
          setSelectedGovernmentIdCategory={setSelectedGovernmentIdCategory}
          governmentIdNumber={governmentIdNumber}
          setGovernmentIdNumber={setGovernmentIdNumber}
        />
        <Socialmedia
          fields={fields}
          handleAddField={handleAddField}
          handleRemoveField={handleRemoveField}
          handleChange={handleChange}
        />
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
