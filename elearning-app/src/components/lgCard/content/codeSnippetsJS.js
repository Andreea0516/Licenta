const snippets = [
    {
      id: 1,
      lines: [
        "function isPrime(n) {",
        "  if (n <= 1) return false;",
        "  for (let i = 2; i <= Math.sqrt(n); i++) {",
        "    if (n % i === 0) return false;",
        "  }",
        "  return true;",
        "}",
        "",
        "for (let i = 1; i <= 20; i++) {",
        "  if (isPrime(i)) {",
        "    console.log(i + ' is prime');",
        "  } else {",
        "    console.log(i + ' is not prime');",
        "  }",
        "}"
      ]
    },
    {
      id: 2,
      lines: [
        "const fruits = ['apple', 'banana', 'cherry', 'date'];",
        "",
        "fruits.forEach((fruit, index) => {",
        "  console.log(`Fruit ${index + 1}: ${fruit}`);",
        "});",
        "",
        "const capitalized = fruits.map(fruit => {",
        "  return fruit.charAt(0).toUpperCase() + fruit.slice(1);",
        "});",
        "",
        "console.log('Capitalized:', capitalized);"
      ]
    },
    {
      id: 3,
      lines: [
        "function factorial(n) {",
        "  if (n === 0 || n === 1) return 1;",
        "  return n * factorial(n - 1);",
        "}",
        "",
        "for (let i = 0; i <= 10; i++) {",
        "  console.log(`Factorial of ${i} is ${factorial(i)}`);",
        "}"
      ]
    },
    {
      id: 4,
      lines: [
        "const users = [",
        "  { name: 'Alice', age: 25 },",
        "  { name: 'Bob', age: 17 },",
        "  { name: 'Charlie', age: 19 },",
        "];",
        "",
        "const adults = users.filter(user => user.age >= 18);",
        "console.log('Adults:', adults);",
        "",
        "const names = users.map(user => user.name);",
        "console.log('User names:', names);"
      ]
    },
    {
      id: 5,
      lines: [
        "let text = 'JavaScript is fun!';",
        "",
        "let reversed = text",
        "  .split('')",
        "  .reverse()",
        "  .join('');",
        "",
        "console.log('Original:', text);",
        "console.log('Reversed:', reversed);",
        "",
        "if (text.includes('fun')) {",
        "  console.log('Yes, it is fun!');",
        "} else {",
        "  console.log('Hmm, are you sure?');",
        "}"
      ]
    },
  ];
  
  export default snippets;
  