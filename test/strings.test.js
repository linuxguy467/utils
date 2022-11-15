//import { expect } from 'chai';
//import { titleCase } from './../index';

const { expect, test } = require('@jest/globals')
const strings = require("../strings");

describe("Strings", () => {
  describe("#titleCase", () => {
    test("Convert lowercase string to proper case", () => {
      const res = strings.titleCase("i'm a little tea pot");
      expect(res).toStrictEqual("I'm A Little Tea Pot");
    });

    test("Convert mixed case string to proper case", () => {
      const res = strings.titleCase("sHoRt AnD sToUt");
      expect(res).toStrictEqual("Short And Stout");
    });

    test("Convert uppercase string to proper case", () => {
      const res = strings.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
      expect(res).toStrictEqual("Here Is My Handle Here Is My Spout");
    });

    test("Not convert string starting with a non alphabeterical character to proper case", () => {
      const res = strings.titleCase("123*[]&%");
      expect(res).toStrictEqual("123*[]&%");
    });
  });
  describe("#validatePhoneNumber", () => {
    test("Validate a phone number", () => {
      const phoneNumber = "(555) 555-5555";
      const resolved = strings.validatePhoneNumber(phoneNumber);
      expect(resolved).toBeTruthy();
    });
    test("Not Validate a phone number with country code", () => {
      const phoneNumber = "+1 (555) 555-5555";
      const resolved = strings.validatePhoneNumber(phoneNumber);
      expect(resolved).toBeFalsy();
    });
    test("Not Validate a non phone number", () => {
      const phoneNumber = "Bob";
      const resolved = strings.validatePhoneNumber(phoneNumber);
      expect(resolved).toBeFalsy();
    });
  });
});
