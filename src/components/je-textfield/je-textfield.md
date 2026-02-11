---
title: "JeTextfield | <je-textfield>"
sidebar_label: "Textfield"
---

<!-- Auto Generated Below -->


## Usage

### 

::: live-code-demo

```html
<je-textfield type="phone" value="2705569657" label="Phone number"></je-textfield>
<je-textfield required placeholder="Type your name..." label="Full Name"></je-textfield>
<je-textfield type="password" label="Password"></je-textfield>
<je-textfield type="money" label="Money"></je-textfield>
<je-textfield type="ssn" label="SSN"></je-textfield>
<je-textfield type="number" label="Number"></je-textfield>
<je-textfield type="time" label="Time"></je-textfield>
<je-textfield type="date" label="Date"></je-textfield>
<je-textfield type="datetime" label="Date & Time"></je-textfield>
<je-textfield type="daterange" label="Date Range"></je-textfield>
<je-textfield type="email" label="Email"></je-textfield>
<je-textfield type="url" label="URL"></je-textfield>
```

```javascript
const pw = document.querySelector('je-textfield[type=password]')
pw.addEventListener('valueChange', ({detail}) => console.log(detail))
```

:::



## Properties

| Property        | Attribute        | Description                                                                                                                  | Type                                                                                                                                                                                     | Default     |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `debounce`      | `debounce`       | Optional debounce of the didInput event                                                                                      | `number`                                                                                                                                                                                 | `0`         |
| `disabled`      | `disabled`       | Renders input as disabled and prevents changes                                                                               | `boolean`                                                                                                                                                                                | `false`     |
| `label`         | `label`          | Text above the control                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |
| `max`           | `max`            | Passed to native input                                                                                                       | `any`                                                                                                                                                                                    | `undefined` |
| `maxlength`     | `maxlength`      | Passed to native input                                                                                                       | `number`                                                                                                                                                                                 | `undefined` |
| `min`           | `min`            | Passed to native input                                                                                                       | `any`                                                                                                                                                                                    | `undefined` |
| `minlength`     | `minlength`      | Passed to native input                                                                                                       | `number`                                                                                                                                                                                 | `undefined` |
| `multiline`     | `multiline`      | Whether the control is a multiline textarea                                                                                  | `boolean`                                                                                                                                                                                | `false`     |
| `note`          | `note`           | Informational message directly below the control                                                                             | `string`                                                                                                                                                                                 | `undefined` |
| `originalValue` | `original-value` | The default value the control will reset to in a form. If not set, will default to the inital value of the "value" property. | `any`                                                                                                                                                                                    | `undefined` |
| `pattern`       | `pattern`        | Passed to native input                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |
| `placeholder`   | `placeholder`    | Input placeholder text                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |
| `readonly`      | `readonly`       | Renders input as read only and prevents changes                                                                              | `boolean`                                                                                                                                                                                | `false`     |
| `required`      | `required`       | Marks as required in form and adds asterisk to the end of the label                                                          | `boolean`                                                                                                                                                                                | `false`     |
| `size`          | `size`           | Container size                                                                                                               | `"lg" \| "md" \| "sm"`                                                                                                                                                                   | `'md'`      |
| `step`          | `step`           | Passed to native input                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |
| `type`          | `type`           |                                                                                                                              | `"date" \| "daterange" \| "datetime" \| "email" \| "inputElement" \| "money" \| "number" \| "password" \| "phone" \| "search" \| "ssn" \| "text" \| "time" \| "url" \| InputMaskOptions` | `'text'`    |
| `value`         | `value`          | Current value of the input                                                                                                   | `any`                                                                                                                                                                                    | `undefined` |
| `wrap`          | `wrap`           | Passed to native textarea                                                                                                    | `string`                                                                                                                                                                                 | `undefined` |


## Events

| Event         | Description             | Type               |
| ------------- | ----------------------- | ------------------ |
| `valueChange` | Emits as the user types | `CustomEvent<any>` |


## Methods

### `isTouched() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `markAsTouched() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part                | Description |
| ------------------- | ----------- |
| `"after-container"` |             |
| `"container"`       |             |
| `"error"`           |             |
| `"input"`           |             |
| `"label"`           |             |
| `"note"`            |             |


## Dependencies

### Depends on

- [je-label](../je-label)
- [je-button](../je-button)
- [je-note](../je-note)

### Graph
```mermaid
graph TD;
  je-textfield --> je-label
  je-textfield --> je-button
  je-textfield --> je-note
  je-button --> je-loading
  style je-textfield fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


