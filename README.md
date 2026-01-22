# JavaScript Core Fundamentals 📘

This documentation covers the essential building blocks of JavaScript: Data Types, Operators, Control Flow, and Loops.

---

## 📋 Table of Contents
1. [Data Types](#1-data-types)
2. [Operators](#2-operators)
3. [Control Flow](#3-control-flow)
4. [Loops](#4-loops)

---

## 1️⃣ Data Types
JavaScript is dynamically typed, meaning variables can hold different types of data during execution.

### 🔹 Primitive Types (Stored by Value)
* **String**: Text data. `let name = "Mahek";`
* **Number**: Integers and decimals. `let age = 25;`
* **Boolean**: Logical values. `let isTrue = true;`
* **Undefined**: Declared but not assigned. `let x;`
* **Null**: Intentional empty value. `let y = null;`
* **Symbol**: Unique identifiers. `let s = Symbol("id");`
* **BigInt**: Large integers. `let big = 100n;`

### 🔹 Non-Primitive Types (Stored by Reference)
* **Array**: Ordered lists. `let list = [1, 2];`
* **Object**: Key-value pairs. `let obj = {id: 1};`
* **Function**: Reusable code blocks. `function ok() {}`

---

## 2️⃣ Operators
Operators are used to perform operations on variables and values.

* **Arithmetic**: Math operations. `console.log(10 % 3); // 1`
* **Assignment**: Assigning values. `x += 5;`
* **Comparison**: returns true/false. `10 === "10"; // false`
* **Logical**: Combining booleans. `true && false; // false`
* **Unary**: Single operand. `y++;` or `!true;`
* **Ternary**: Shorthand if-else. `10 > 5 ? "Yes" : "No";`

---

## 3️⃣ Control Flow
Control flow manages the order in which statements are executed.

| Name | Detail | Example |
| :--- | :--- | :--- |
| **If-Else** | Executes code based on condition | `if(x > 5) { ... }` |
| **Switch** | Selects one of many code blocks | `switch(val) { case 1: ... }` |
| **Ternary** | Single line conditional | `age >= 18 ? "Adult" : "Minor"` |
| **Nullish** | Handles `null` or `undefined` | `let theme = userPref ?? "dark";` |



---

## 4️⃣ Loops
Loops are used to repeat a block of code multiple times.

### 🔹 Standard Loops
* **For Loop**: Best for fixed iterations.  
    `for(let i=0; i<3; i++) { console.log(i); }`
* **While Loop**: Runs while a condition is true.  
    `while(x < 3) { x++; }`
* **Do-While**: Runs at least once.  
    `do { x++; } while(x < 3);`

### 🔹 Specialized Loops
* **For...Of**: Iterates over **Array values**.  
    `for(let val of [10, 20]) { console.log(val); }`
* **For...In**: Iterates over **Object keys**.  
    `for(let key in {a:1}) { console.log(key); }`



---

## 🧠 Quick Tips
* Use `typeof` to check primitive types (e.g., `typeof "hi"` is `"string"`).
* Use `instanceof` to check reference types (e.g., `arr instanceof Array`).
* `NaN` is technically a `number` type, and `null` is an `object` type.

---
*Generated for JavaScript Learning Path 2026*
