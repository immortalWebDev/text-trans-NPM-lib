# String Utilities Library

A comprehensive library for performing various string manipulations. This library provides utility functions that simplify and enhance string operations for JavaScript projects.

## Installation

To use this library, first install it:

```javascript
npm install 'text-trans';
```

Add the file containing the exported functions to your project and import the desired utilities.

```javascript
import { capitalize, reverse, truncate, ... } from 'text-trans';
```

---

## Functions Overview

### 1. **capitalize**
- **Description**: Capitalizes the first letter of a string.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: A new string with the first letter capitalized.
- **Example**:
  ```javascript
  capitalize("hello world"); // Output: "Hello world"
  ```

### 2. **reverse**
- **Description**: Reverses the given string.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The reversed string.
- **Example**:
  ```javascript
  reverse("hello"); // Output: "olleh"
  ```

### 3. **truncate**
- **Description**: Truncates a string to the specified length and appends an ellipsis (`...`) if necessary.
- **Arguments**:
  - `str` (string): The input string.
  - `length` (number): The maximum length of the string.
- **Returns**: The truncated string with an ellipsis if it exceeds the length.
- **Example**:
  ```javascript
  truncate("This is a long string", 10); // Output: "This is a..."
  ```

### 4. **toCamelCase**
- **Description**: Converts a string to camelCase.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The camelCase formatted string.
- **Example**:
  ```javascript
  toCamelCase("hello world example"); // Output: "helloWorldExample"
  ```

### 5. **toPascalCase**
- **Description**: Converts a string to PascalCase.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The PascalCase formatted string.
- **Example**:
  ```javascript
  toPascalCase("hello world example"); // Output: "HelloWorldExample"
  ```

### 6. **toKebabCase**
- **Description**: Converts a string to kebab-case.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The kebab-case formatted string.
- **Example**:
  ```javascript
  toKebabCase("Hello World Example"); // Output: "hello-world-example"
  ```

### 7. **toSnakeCase**
- **Description**: Converts a string to snake_case.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The snake_case formatted string.
- **Example**:
  ```javascript
  toSnakeCase("Hello World Example"); // Output: "hello_world_example"
  ```

### 8. **toTitleCase**
- **Description**: Converts a string to Title Case.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The Title Case formatted string.
- **Example**:
  ```javascript
  toTitleCase("hello world example"); // Output: "Hello World Example"
  ```

### 9. **wordCount**
- **Description**: Counts the number of words in a string.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: The word count as a number.
- **Example**:
  ```javascript
  wordCount("This is a sample sentence."); // Output: 5
  ```

### 10. **isPalindrome**
- **Description**: Checks if a string is a palindrome.
- **Arguments**:
  - `str` (string): The input string.
- **Returns**: A boolean value indicating whether the string is a palindrome.
- **Example**:
  ```javascript
  isPalindrome("A man, a plan, a canal: Panama"); // Output: true
  isPalindrome("hello"); // Output: false
  ```

---

## 📜 License
This library is open-source and can be used freely in personal and commercial projects.


## 📧 Contact

For any inquiries, feedback, or support:
- **Phone:** [WhatsApp](https://wa.me/917774835449)
- **Email**: [pgbadgujar007@gmail.com](mailto:pgbadgujar007@gmail.com)
- **Portfolio**: [My Portfolio](https://www.snapit.tech/pgbadgujar007/5w3jtzcp1e)

--- 

 **Inspired by NPM** &&
 ***Created with 💝 by Piyush***