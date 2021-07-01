const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

const input = "Abc def";

describe("error handling", () => {
  it("should return false if shift amount is not provided", () => {
    const expected = false;
    const actual = caesar(input);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift amount is greater than 25", () => {
    const expected = false;
    const actual = caesar(input, 30);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift amount is zero", () => {
    const expected = false;
    const actual = caesar(input, 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift amount is less than negative 25", () => {
    const expected = false;
    const actual = caesar(input, -30);
    expect(actual).to.equal(expected);
  });
});

describe("encoding a message", () => {
  it("should return a new string equivalent to the shift amount when encoding", () => {
    const expected = "bcd efg";
    const actual = caesar(input, 1);
    expect(actual).to.equal(expected);
  });
  it("spaces and other non-alphabetic characters should be maintained throughout", () => {
    const input = "Abc def!";
    const expected = "bcd efg!";
    const actual = caesar(input, 1);
    expect(actual).to.equal(expected);
  });
  it("capital letters can be ignored", () => {
    const expected = "bcd efg";
    const actual = caesar(input, 1);
    expect(actual).to.equal(expected);
  });
  it("if a letter is shifted so that it goes 'off' the alphabet, it should wrap around to front of alphabet", () => {
    const input = "xyz";
    const expected = "yza";
    const actual = caesar(input, 1);
    expect(actual).to.equal(expected);
  });
  it("should allow for a negative shift that will shift to the left", () => {
    const input = "bcd";
    const expected = "abc";
    const actual = caesar(input, -1);
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const expected = "zab cde";
    const actual = caesar(input, 1, false);
    expect(actual).to.equal(expected);
  });
  it("spaces and other non-alphabetic characters should be maintained throughout", () => {
    const input = "Bcd efg!";
    const expected = "abc def!";
    const actual = caesar(input, 1, false);
    expect(actual).to.equal(expected);
  });
  it("capital letters can be ignored", () => {
    const input = "BCD EFG";
    const expected = "abc def";
    const actual = caesar(input, 1, false);
    expect(actual).to.equal(expected);
  });
  it("if a letter is shifted so that it goes 'off' the alphabet, it should wrap around to end of alphabet", () => {
    const input = "abc";
    const expected = "zab";
    const actual = caesar(input, 1, false);
    expect(actual).to.equal(expected);
  });
  it("should allow for a negative shift that will shift to the left", () => {
    const input = "abc";
    const expected = "bcd";
    const actual = caesar(input, -1, false);
    expect(actual).to.equal(expected);
  });
});
