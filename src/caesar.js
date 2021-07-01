const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  //helper function to determine encoded position of a given letter in the input
  //of the caesar function
  function _shifter(char, shift) {
    if (!alphabet.includes(char)) return char;
    let newPosition = alphabet.indexOf(char) + shift;
    if (newPosition > 25) newPosition -= 26;
    if (newPosition < 0) newPosition += 26;
    return alphabet[newPosition];
  }

  function caesar(input, shift, encode = true) {
    //exiting early if shift is not a valid amount
    if (!shift || shift >= 26 || shift == 0 || shift <= -26) return false;
    let endMessage = "";
    // Multiplying shift by -1 in cases where encode==false, which means decode
    if (!encode) shift *= -1;
    for (let char of input) endMessage += _shifter(char.toLowerCase(), shift);
    return endMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
