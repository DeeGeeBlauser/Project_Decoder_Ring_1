const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;
const polybius = polybiusModule.polybius;

const input = "Abc def";

describe("encoding a message", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "112131 415112";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("when encoding, 'i' and 'j' should both output a value of 42", () => {
    const input = "Jiffy";
    const expected = "4242121245";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should leave space as is", () => {
    const input = "a b c";
    const expected = "11 21 31";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const input = "112131";
    const expected = "abc";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to both 'i' and 'j'", () => {
    const input = "424321";
    const expected = "(i/j)ob";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("should return spaces as is", () => {
    const input = "11 21 31";
    const expected = "a b c";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("should return false if the length of all numbers is odd", () => {
    const input = "112131 41511";
    const expected = false;
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
});
