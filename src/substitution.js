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
    let encodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      let lowerChar = input[i].toLowerCase();
      if (ORIGINAL_ALPHABET.includes(lowerChar)) {
        let originalIndex = ORIGINAL_ALPHABET.indexOf(lowerChar);
        let encodedLetter = encoderArray[originalIndex];
        encodedMessage += encodedLetter;
      } else {
        //accounting for spaces and special characters present in the input
        encodedMessage += lowerChar;
      }
    }
    return encodedMessage;
  }

  //helper function used to decode messages
  function _decoder(input, alphabet) {
    if (_alphabetChecker(alphabet) === false) return false;
    const decoderArray = alphabet.split("");
    let decodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      let lowerChar = input[i].toLowerCase();
      if (decoderArray.includes(lowerChar)) {
        let originalIndex = decoderArray.indexOf(lowerChar);
        let decodedLetter = ORIGINAL_ALPHABET[originalIndex];
        decodedMessage += decodedLetter;
      } else {
        //accounting for spaces and special characters present in the input
        decodedMessage += lowerChar;
      }
    }
    return decodedMessage;
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
