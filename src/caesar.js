const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    //exiting early if shift is not a valid amount
    if (!shift || shift >= 26 || shift == 0 || shift <= -26) return false;
    let endMessage = "";
    // Multiplying shift by -1 in cases where encode==false, which means decode
    if (!encode) shift *= -1;
    for (let char of input) {
      let lowerChar = char.toLowerCase();
      if (alphabet.includes(lowerChar)) {
        let newPosition = alphabet.indexOf(lowerChar) + shift;
        if (newPosition > 25) newPosition -= 26;
        if (newPosition < 0) newPosition += 26;
        endMessage += alphabet[newPosition];
      } else {
        endMessage += lowerChar;
      }
    }
    return endMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
