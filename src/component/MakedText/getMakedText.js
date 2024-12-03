export function getMakedText(originalWord, guessLetters) {
  console.log(guessLetters);
  guessLetters = guessLetters.map((letter) => letter.toUpperCase());
  let guessLettersSet = new Set(guessLetters);

  let originalLetters = originalWord.toUpperCase().split("");

  const result = originalLetters.map((letter) => {
    if (guessLettersSet.has(letter)) {
      return letter;
    } else {
      return "_";
    }
  });

  return result;
}
