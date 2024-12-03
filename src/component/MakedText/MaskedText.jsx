import { getMakedText } from "./getMakedText";

const MaskedText = ({ text, guessLetters }) => {
  console.log(guessLetters);
  const maskedString = getMakedText(text, guessLetters);
  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span key={index} className="mx-1">
            {letter}
          </span>
        );
      })}
    </>
  );
};

export default MaskedText;
