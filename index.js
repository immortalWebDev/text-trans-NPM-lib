// Capitalizes the first letter of a string
module.exports.capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Reverses a string
module.exports.reverse = (str) => str.split('').reverse().join('');

// Truncates a string to a specified length
module.exports.truncate = (str, length) =>
  str.length > length ? str.slice(0, length) + '...' : str;

// Converts a string to camelCase
module.exports.toCamelCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());

// Converts a string to PascalCase
module.exports.toPascalCase = (str) =>
  str
    .split(/[^a-zA-Z0-9]+/)
    .map((word) => module.exports.capitalize(word.toLowerCase()))
    .join('');

// Converts a string to kebab-case
module.exports.toKebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Converts a string to snake_case
module.exports.toSnakeCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '');

// Converts a string to Title Case
module.exports.toTitleCase = (str) =>
  str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Counts the number of words in a string
module.exports.wordCount = (str) => str.trim().split(/\s+/).length;

// Checks if a string is a palindrome
module.exports.isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
};
