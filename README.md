# rnd-words

A lightweight and flexible tool to generate random words with customizable separators and optional random numbers. Ideal for generating unique strings, usernames, or test data.

## Installation

To install the package, run:

```bash
npm install rnd-words
```

## Usage

`rnd-words` can generate random word combinations, with options to specify the number of words, customize the separator, and append random numbers for uniqueness.

## Example

```javascript
import { generate } from "rnd-words";

// Generate a random string with 3 words, separated by '-', and append random numbers
const randomString = generate(3, "-", true);
console.log(randomString); // e.g., "ocean-tree-bicycle-97"

// Generate a random string with 2 words, no numbers, separated by spaces
const wordsOnly = generate(2, " ", false);
console.log(wordsOnly); // e.g., "cat dog"
```

**Parameters**

- `numberOfWords` (optional): The number of words to generate. **Default is 3**.
- `separator` (optional): The string used to separate words. **Default is "-"**.
- `randomNumbers` (optional): A boolean indicating whether to append random numbers. **Default is true**.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
