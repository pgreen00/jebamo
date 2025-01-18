---
title: 'JeToast | <je-toast>'
sidebar_label: 'Toast'
---
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                                           | Default          |
| ---------- | ---------- | ----------- | -------------------------------------------------------------------------------------------------------------- | ---------------- |
| `closable` | `closable` |             | `boolean`                                                                                                      | `false`          |
| `color`    | `color`    |             | `"dark" \| "error" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'`      |
| `duration` | `duration` |             | `number`                                                                                                       | `0`              |
| `fixed`    | `fixed`    |             | `boolean`                                                                                                      | `false`          |
| `header`   | `header`   |             | `string`                                                                                                       | `undefined`      |
| `icon`     | `icon`     |             | `string`                                                                                                       | `undefined`      |
| `message`  | `message`  |             | `string`                                                                                                       | `undefined`      |
| `open`     | `open`     |             | `boolean`                                                                                                      | `false`          |
| `position` | `position` |             | `"bottom" \| "bottom-end" \| "bottom-start" \| "top" \| "top-end" \| "top-start"`                              | `'bottom-start'` |
| `progress` | `progress` |             | `boolean`                                                                                                      | `false`          |
| `type`     | `type`     |             | `"bar" \| "card"`                                                                                              | `'bar'`          |


## Events

| Event          | Description | Type                                          |
| -------------- | ----------- | --------------------------------------------- |
| `toastDismiss` |             | `CustomEvent<{ role?: string; data?: any; }>` |
| `toastPresent` |             | `CustomEvent<any>`                            |


## Methods

### `didDismiss() => Promise<OverlayData>`



#### Returns

Type: `Promise<OverlayData>`



### `dismiss(role?: string, data?: any) => Promise<void>`



#### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `role` | `string` |             |
| `data` | `any`    |             |

#### Returns

Type: `Promise<void>`



### `present() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"header"`  |             |
| `"message"` |             |


## Dependencies

### Used by

 - [je-page](../je-page)

### Depends on

- [je-toolbar](../je-toolbar)
- [je-icon](../je-icon)
- [je-button](../je-button)

### Graph
```mermaid
graph TD;
  je-toast --> je-toolbar
  je-toast --> je-icon
  je-toast --> je-button
  je-page --> je-toast
  style je-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
