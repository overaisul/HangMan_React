import { getButtonStyle } from "./getButtonStyling";
function Button({ type = "text", InputType, OnClickHandler, styleType }) {
  return (
    <>
      <button
        type={type}
        onClick={OnClickHandler}
        className={`px-4 py-4 my-1 text-white ${getButtonStyle(styleType)}`}
      >
        {InputType}
      </button>
    </>
  );
}
export default Button;
