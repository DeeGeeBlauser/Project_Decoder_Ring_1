const substitutionModule = (function () {
  const ORIGINAL_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

  //helper function to determine alphabet parameter is present, exactly 26 characters
  //and contains unique characters
  function _alphabetChecker(alphabet) {
    if (!alphabet || alphabet.length != 26) return false;
    const alphabetArray = alphabet.split("").reduce((acc, letter) => {
      if (!acc.includes(letter)) {
        acc.push(letter);
      }
      return acc;
    }, []);
    if (alphabetArray.length === 26) {
      return true;
    } else {
      return false;
    }
  }

  // helper function used to encode messages
  function _encoder(input, alphabet) {
    if (_alphabetChecker(alphabet) === false) return false;
    const encoderArray = alphabet.split("");
    return (encodedMessage = input
      .toLowerCase()
      .split("")
      .reduce((acc, letter) => {
        if (ORIGINAL_ALPHABET.includes(letter)) {
          let originalIndex = ORIGINAL_ALPHABET.indexOf(letter);
          let encodedLetter = encoderArray[originalIndex];
          acc += encodedLetter;
        } else {
          acc += letter;
        }
        return acc;
      }, ""));
  }

  //helper function used to decode messages
  function _decoder(input, alphabet) {
    if (_alphabetChecker(alphabet) === false) return false;
    const decoderArray = alphabet.split("");
    return (decodedMessage = input
      .toLowerCase()
      .split("")
      .reduce((acc, letter) => {
        if (decoderArray.includes(letter)) {
          let originalIndex = decoderArray.indexOf(letter);
          let decodedLetter = ORIGINAL_ALPHABET[originalIndex];
          acc += decodedLetter;
        } else {
          acc += letter;
        }
        return acc;
      }, ""));
  }

  function substitution(input, alphabet, encode = true) {
    if (encode) {
      return _encoder(input, alphabet);
    } else {
      return _decoder(input, alphabet);
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
