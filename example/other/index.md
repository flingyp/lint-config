```js
// This gets linted
const answer = 6 * 7;
console.log(answer);
```

Here is some regular Markdown text that will be ignored.

```js
// This also gets linted

function hello() {
  console.log('2');
}
hello();
```

```jsx
// This can be linted too if you add `.jsx` files to `overrides` in ESLint v7
// or pass `--ext jsx` in ESLint v6.
const div = <div className="jsx" />;
console.log(div);
```

```js
alert('Hello, world!');
```

Assuming `no-alert` is enabled in `.eslintrc`, the first code block will have no error from `no-alert`:

<!-- eslint-env browser -->
<!-- eslint-disable no-alert -->

```js
alert('Hello, world!');
```

But the next code block will have an error from `no-alert`:

<!-- eslint-env browser -->

```js
alert('Hello, world!');
```

```json
{
  // This code block is hidden from ESLint.
  "hello": "world"
}
```

```js
console.log('This code block is linted normally.');
```
