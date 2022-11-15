/**
 * gets the current or specified date in a copyright format
 *
 * @param {Date} date
 * @return {string} the copyright formatted date!
 */
const getCopyrightDate = (date = new Date()) =>
  `Copyright \u00A9 ${date.getFullYear()}`;

module.exports = {
  getCopyrightDate,
};
