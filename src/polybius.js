const polybiusModule = (function () {
  const encodeAlphabet = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    "(i/j)": 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const decodeAlphabet = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  //helper function to encode messages from letters to numbers
  function _encoder(input) {
    let encodeArr = [];
    for (let char of input) {
      let lowerChar = char.toLowerCase();
      //accounting for special case of 'i' and 'j' as they are a shared key
      if (lowerChar === "i" || lowerChar === "j") {
        encodeArr.push("42");
        //checking to ensure the current character is alphabetic
      } else if (lowerChar.match(/[a-z]/)) {
        encodeArr.push(encodeAlphabet[lowerChar]);
        //accounting for any non-alphabetic character and pushing them to encodeArr
      } else {
        encodeArr.push(lowerChar);
      }
    }
    return encodeArr.join("");
  }

  //helper function to decode from numbers to letters
  function _decoder(input) {
    //checking to see if the length of all numbers (excluding spaces) is even)
    if (input.replace(/\s/g, "").length % 2 !== 0) return false;
    let decodedMessage = "";
    for (let i = 0; i < input.length; i += 2) {
      // checking for spaces and adding them directly to the decodeMessage
      if (input[i] === " ") {
        decodedMessage += input[i];
        i--;
      } else {
        //taking each number pair and converting it to a letter to push to decodedMessage
        const x = input[i];
        const y = input[i + 1];
        const letterPos = `${x}${y}`;
        decodedMessage += decodeAlphabet[letterPos];
      }
    }
    return decodedMessage;
  }

  function polybius(input, encode = true) {
    if (!encode) {
      return _decoder(input);
    } else {
      return _encoder(input);
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
