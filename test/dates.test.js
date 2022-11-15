const { expect, test } = require("@jest/globals");
const dates = require("../dates");

describe("Date", () => {
  describe("#getCopyrightDate", () => {
    test("Get a date in copyright format with supplied date", () => {
      const date = new Date("07-30-1992");
      const copyrightDate = dates.getCopyrightDate(date);
      expect(copyrightDate).toStrictEqual(`Copyright \u00A9 1992`);
    });

    test("Get a date in copyright format without supplied date", () => {
      const copyrightDate = dates.getCopyrightDate();
      expect(copyrightDate).toStrictEqual(
        `Copyright \u00A9 ${new Date().getFullYear()}`
      );
    });
  });
});
