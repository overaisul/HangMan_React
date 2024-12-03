import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    if (value) {
      navigate("/play", { state: { wordSelected: value } });
    }
  }
  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function inputChange() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }
  return (
    <>
      <TextInputForm
        inputType={inputType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputChange={inputChange}
      ></TextInputForm>
    </>
  );
}

export default TextInputFormContainer;
