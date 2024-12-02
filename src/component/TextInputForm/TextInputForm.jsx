import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
function TextInputForm({ inputType, handleSubmit, handleChange, inputChange }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <TextInput
            type={inputType}
            label={"Enter The Word"}
            onChangeHandler={handleChange}
          ></TextInput>
          <div>
            {" "}
            <Button
              type={"button"}
              InputType={inputType === "password" ? "Show" : "Hide"}
              styleType={"warning"}
              OnClickHandler={inputChange}
            />
          </div>
          <div>
            {" "}
            <Button
              type={"submit"}
              InputType={"submit"}
              styleType={"success"}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default TextInputForm;
