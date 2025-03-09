---
title: 'JeAlert | <je-alert>'
sidebar_label: 'Alert'
---
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                  | Default          |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------- | ---------------- |
| `closable` | `closable` |             | `boolean`                                                                             | `false`          |
| `color`    | `color`    |             | `"danger" \| "dark" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'`      |
| `duration` | `duration` |             | `number`                                                                              | `0`              |
| `fixed`    | `fixed`    |             | `boolean`                                                                             | `false`          |
| `header`   | `header`   |             | `string`                                                                              | `undefined`      |
| `icon`     | `icon`     |             | `string`                                                                              | `undefined`      |
| `message`  | `message`  |             | `string`                                                                              | `undefined`      |
| `open`     | `open`     |             | `boolean`                                                                             | `false`          |
| `position` | `position` |             | `"bottom" \| "bottom-end" \| "bottom-start" \| "top" \| "top-end" \| "top-start"`     | `'bottom-start'` |
| `progress` | `progress` |             | `boolean`                                                                             | `false`          |
| `type`     | `type`     |             | `"bar" \| "card"`                                                                     | `'bar'`          |


## Events

| Event          | Description | Type                                          |
| -------------- | ----------- | --------------------------------------------- |
| `alertDismiss` |             | `CustomEvent<{ role?: string; data?: any; }>` |
| `alertPresent` |             | `CustomEvent<any>`                            |


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

### Depends on

- [je-toolbar](../je-toolbar)
- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-alert --> je-toolbar
  je-alert --> je-icon
  style je-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
