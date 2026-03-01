# ⚡ JavaScript Core Fundamentals

A comprehensive guide to the essential building blocks of JavaScript: Data Types, Operators, Control Flow, and Loops. Designed for quick reference and deep conceptual understanding.

---

## 📑 Table of Contents
* [1. Data Types & Memory](#-1-data-types--memory)
* [2. Operators & Expressions](#-2-operators--expressions)
* [3. Control Flow](#-3-control-flow)
* [4. Loops & Iteration](#-4-loops--iteration)
* [5. Best Practices & Pitfalls](#-5-best-practices--pitfalls)

---

## 💎 1. Data Types & Memory
JavaScript is **dynamically typed**, but understanding how data is stored is crucial for avoiding bugs.

### 🔹 Primitive Types (Passed by Value)
Stored directly in the **Stack**. Changing one variable does not affect others.

* **String**: `"Hello"`
* **Number**: `42`, `3.14`
* **Boolean**: `true` / `false`
* **Undefined**: Variable declared but not assigned.
* **Null**: Intentional absence of any object value.
* **Symbol**: Unique and immutable identifiers.
* **BigInt**: For integers larger than $2^{53} - 1$.

### 🔹 Reference Types (Passed by Reference)
Stored in the **Heap**. Variables hold a pointer to the memory address.
* **Object**: `{ name: "Mahek", age: 25 }`
* **Array**: `[1, 2, 3]`
* **Function**: `function greet() { ... }`

---

## 🚀 2. Operators
Operators transform and compare data.

| Category | Operators | Example |
| :--- | :--- | :--- |
| **Arithmetic** | `+`, `-`, `*`, `/`, `%`, `**` | `2 ** 3 // 8` |
| **Comparison** | `==`, `===`, `!=`, `!==`, `>`, `<` | `5 === "5" // false` |
| **Logical** | `&&` (AND), `||` (OR), `!` (NOT) | `isLoggedIn && hasAccess` |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=` | `count += 1` |
| **Nullish** | `??` | `const name = input ?? "Guest"` |

> **Note:** Always use `===` (Strict Equality) to check both value and type to avoid unexpected coercion.

---

## 🚦 3. Control Flow
Directing the path your code takes based on logic.

### Conditional Logic
* **If-Else**: Standard branching.
* **Switch**: Efficient for multiple discrete values.
* **Ternary**: `condition ? exprIfTrue : exprIfFalse` — Great for inline assignments.

### Short-Circuit Evaluation
JavaScript evaluates logical expressions from left to right:
* `true || anything` → returns `true` immediately.
* `false && anything` → returns `false` immediately.

---

## 🔄 4. Loops & Iteration
Repeating tasks efficiently.

### 🔹 The "Big Three"
1.  **For**: `for (let i = 0; i < 5; i++)` — Use when you know the iteration count.
2.  **While**: `while (condition)` — Use when the end depends on a dynamic state.
3.  **Do-While**: Executes at least once before checking the condition.

### 🔹 Modern Iterators
* **`for...of`**: Best for **Arrays**, Strings, and Maps (values).
    ```javascript
    const colors = ['red', 'green', 'blue'];
    for (const color of colors) { console.log(color); }
    ```
* **`for...in`**: Best for **Objects** (keys/properties).
    ```javascript
    const user = { name: 'Mahek', role: 'Dev' };
    for (const key in user) { console.log(`${key}: ${user[key]}`); }
    ```

---

## ⚠️ 5. Best Practices & Pitfalls

* **Type Coercion**: `5 + "5"` results in `"55"` (string), but `5 - "5"` results in `0` (number).
* **NaN (Not a Number)**: Result of invalid math. Check using `Number.isNaN()`.
* **Hoisting**: Variables declared with `var` are moved to the top of their scope, but `let` and `const` remain in the "Temporal Dead Zone."
* **Const by Default**: Always use `const` unless you know the variable needs to be reassigned.

---
*Last Updated: March 2026 • JavaScript Learning Path*
