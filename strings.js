/**
 * Converts string to proper Case.
 * @param {string} str
 * @return {string}
 */
const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
};

/**
 * Validate a phone number string
 * <strong>Note</strong>: Does not include country code. 
 * Will fail if country code is in string
 * 
 * @param {string} phoneNumber
 * @return {string} true if valid phone number; false otherwise
 */
const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return phoneNumberFormat.test(phoneNumber);
};

module.exports = {
  titleCase,
  validatePhoneNumber,
};
