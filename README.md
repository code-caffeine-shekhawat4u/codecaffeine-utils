```markdown
# codecaffeine-utils

A collection of utility functions for JavaScript and TypeScript projects, designed to boost your productivity and streamline your coding experience. This package is developed and maintained by Code Caffeine.

## ✨ Features

- Date utilities: Format dates, calculate relative time (e.g., "2 days ago").
- String manipulation: Capitalize, truncate, and sanitize strings.
- Array utilities: Remove duplicates, chunk arrays, and filter data.
- Performance optimizations: Debounce and throttle functions to enhance performance.
- Random generation: Generate UUIDs and random numbers.

## 📦 Installation

To use this package in your project, install it via npm:

```bash
npm install codecaffeine-utils
```

## 🚀 Usage

Below are some examples of how to use the utilities provided by this package.

### 1. **Date Formatting**

```typescript
import { formatDate, timeAgo } from 'codecaffeine-utils';

console.log(formatDate(new Date(), 'YYYY-MM-DD')); // Output: "2024-11-16"
console.log(timeAgo(new Date('2024-11-14')));      // Output: "2 days ago"
```

### 2. **String Manipulation**

```typescript
import { capitalize, truncate } from 'codecaffeine-utils';

console.log(capitalize('hello world')); // Output: "Hello world"
console.log(truncate('Code Caffeine Rocks!', 10)); // Output: "Code Caff..."
```

### 3. **Array Utilities**

```typescript
import { uniqueArray, chunkArray } from 'codecaffeine-utils';

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueArray(numbers)); // Output: [1, 2, 3, 4, 5]

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
```

### 4. **Debounce and Throttle Functions**

```typescript
import { debounce, throttle } from 'codecaffeine-utils';

const log = () => console.log('Action triggered');

// Debounce example
const debouncedLog = debounce(log, 500);
debouncedLog();

// Throttle example
const throttledLog = throttle(log, 1000);
window.addEventListener('scroll', throttledLog);
```

### 5. **UUID and Random Number Generation**

```typescript
import { generateUUID, randomNumber } from 'codecaffeine-utils';

console.log(generateUUID()); // Output: "6e1e7a0f-d982-4f3d-a1c7-5f0e0b1dabc3"
console.log(randomNumber(1, 100)); // Output: A random number between 1 and 100
```

## 📚 API Reference

| Function                 | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
| `formatDate(date, format)` | Formats a `Date` object into a specified string format.         |
| `timeAgo(date)`         | Converts a date to a "time ago" string.                         |
| `capitalize(str)`       | Capitalizes the first letter of a string.                       |
| `truncate(str, length)` | Trims a string to a specified length with ellipsis.             |
| `uniqueArray(arr)`      | Removes duplicates from an array.                               |
| `chunkArray(arr, size)` | Splits an array into chunks of a given size.                    |
| `debounce(fn, delay)`   | Creates a debounced function to control function execution.     |
| `throttle(fn, delay)`   | Creates a throttled function to limit function calls.           |
| `generateUUID()`        | Generates a random UUID string.                                 |
| `randomNumber(min, max)`| Generates a random number within a range.                       |

## 🛠️ Development

If you want to contribute or modify the package, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/code-caffeine-shekhawat4u/codecaffeine-utils.git
   cd codecaffeine-utils
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

## 👥 Authors

- **Harshvardhan Singh Shekhawat** - [Portfolio](https://shekhawat4u.me)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🌟 Show Your Support!

If you like this package, please consider giving it a ⭐ on GitHub and following **Code Caffeine** on social media!

---

**© 2024 Code Caffeine. All rights reserved.**
```
