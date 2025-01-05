# JavaScript Variable Declarations: `const`, `let`, and `var`

## Overview
In JavaScript, variables can be declared using `const`, `let`, and `var`. Each has different characteristics and use cases.

## `var`
- **Scope**: Function-scoped.
- **Hoisting**: Hoisted and initialized with `undefined`.
- **Re-declaration**: Allowed within the same scope.

### Example
```javascript
var x = 10;
if (true) {
    var x = 20; // Same variable, re-declared
    console.log(x); // 20
}
console.log(x); // 20
```

## `let`
- **Scope**: Block-scoped.
- **Hoisting**: Hoisted but not initialized.
- **Re-declaration**: Not allowed within the same scope.

### Example
```javascript
let y = 10;
if (true) {
    let y = 20; // Different variable, block-scoped
    console.log(y); // 20
}
console.log(y); // 10
```

## `const`
- **Scope**: Block-scoped.
- **Hoisting**: Hoisted but not initialized.
- **Re-declaration**: Not allowed within the same scope.
- **Immutability**: Must be initialized at declaration and cannot be reassigned.

### Example
```javascript
const z = 10;
if (true) {
    const z = 20; // Different variable, block-scoped
    console.log(z); // 20
}
console.log(z); // 10

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
```

## Summary
- **`var`**: Function-scoped, hoisted, can be re-declared.
- **`let`**: Block-scoped, hoisted but not initialized, cannot be re-declared.
- **`const`**: Block-scoped, hoisted but not initialized, cannot be re-declared, must be initialized, and cannot be reassigned.

This README provides a concise explanation of the differences among `const`, `let`, and `var` in JavaScript.