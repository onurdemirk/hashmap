# HashMap Implementation in JavaScript

A custom HashMap implementation in JavaScript demonstrating key-value storage, collision handling, and dynamic resizing.

## Features

- **Hashing Algorithm:** Uses polynomial rolling hash with prime number (31) and modulo operation
- **Collision Handling:** Separate chaining with buckets (arrays)
- **Dynamic Resizing:** Automatically doubles capacity at 75% load factor
- **Core Methods:**
  - `set(key, value)`
  - `get(key)`
  - `has(key)`
  - `remove(key)`
  - `length()`
  - `clear()`
  - `keys()`
  - `values()`
  - `entries()`
