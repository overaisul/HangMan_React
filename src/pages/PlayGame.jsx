import { useLocation } from "react-router-dom";
import { useState } from "react";
import MaskedText from "../component/MakedText/maskedText";
import LetterButtons from "../component/LetterButtons/LetterButtons";

function PlayGame() {
  const { state } = useLocation();

  const [guessedLetters, setGuessLetters] = useState([]);

  function handleLetterClick(letter) {
    setGuessLetters([...guessedLetters, letter]);
  }
  return (
    <>
      <h1>Play Game</h1>
      <MaskedText text={state.wordSelected} guessLetters={guessedLetters} />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
    </>
  );
}

export default PlayGame;
