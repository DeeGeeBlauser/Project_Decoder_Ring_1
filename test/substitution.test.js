const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;
const substitution = substitutionModule.substitution;

describe("error handling", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const input = "abc";
    const expected = false;
    const actual = substitution(input);
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const input = "hello";
    const alphabet = "bcd";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const input = "hello";
    const alphabet = "abcdefghijklmnopqrstuvwxyy";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});

describe("encoding a message", () => {
  it("should encode a message by using the substitution alphabet", () => {
    const input = "abc";
    const alphabet = "xbzaycdefghijklmnopqrstuvw";
    const expected = "xbz";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    const input = "abc";
    const alphabet = "x!zabcdefghijklmnopqrstuvw";
    const expected = "x!z";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const input = "a b c";
    const alphabet = "x!zabcdefghijklmnopqrstuvw";
    const expected = "x ! z";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by using the substitution alphabet", () => {
    const input = "xbz";
    const alphabet = "xbzaycdefghijklmnopqrstuvw";
    const expected = "abc";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    const input = "x!z";
    const alphabet = "x!zabcdefghijklmnopqrstuvw";
    const expected = "abc";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const input = "x ! z";
    const alphabet = "x!zabcdefghijklmnopqrstuvw";
    const expected = "a b c";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
});
