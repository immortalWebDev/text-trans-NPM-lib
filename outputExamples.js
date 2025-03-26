const {
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toPascalCase,
    toKebabCase,
    toSnakeCase,
    toTitleCase,
    wordCount,
    isPalindrome
  } = require('./index.js');  // Assuming index.js is in the same directory
  
  console.log(capitalize("hello world")); // Output: "Hello world"
  console.log(reverse("hello")); // Output: "olleh"
  console.log(truncate("This is a long string", 10)); // Output: "This is a..."
  console.log(toKebabCase("Hello World Example")); // Output: "hello-world-example"
  console.log(toPascalCase("hello world example")); // Output: "HelloWorldExample"
  console.log(toCamelCase("hello    world example")); // Output: "helloWorldExample"
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
  console.log(wordCount("This is a sample sentence.")); // Output: 5
  console.log(toTitleCase("hello world example")); // Output: "Hello World Example"
  console.log(toSnakeCase("Hello World Example")); // Output: "hello_world_example"
  console.log(wordCount("Hello World Example")); // Output: 3
  