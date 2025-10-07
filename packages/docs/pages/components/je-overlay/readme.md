---
title: 'JeOverlay | <je-overlay>'
sidebar_label: 'Overlay'
---
<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                             | Type                                     | Default     |
| ----------------- | ------------------ | ------------------------------------------------------- | ---------------------------------------- | ----------- |
| `backdropDismiss` | `backdrop-dismiss` | Backdrop will close the modal on click when enabled     | `boolean`                                | `true`      |
| `destroy`         | --                 | Optionally execute a promise after closing completes    | `() => void \| Promise<void>`            | `undefined` |
| `init`            | --                 | Optionally execute a promise before presentation begins | `() => void \| Promise<void>`            | `undefined` |
| `open`            | `open`             | Opens and closes modal                                  | `boolean`                                | `false`     |
| `side`            | `side`             | Side of the screen where the drawer will be displayed   | `"bottom" \| "left" \| "right" \| "top"` | `undefined` |
| `size`            | `size`             | Size of the overlay                                     | `"lg" \| "md" \| "sm"`                   | `'md'`      |


## Events

| Event     | Description                                                                                                           | Type                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `dismiss` | Emits whenever the overlay has finished closing. Emits the role and optional data object passed to the hide() method. | `CustomEvent<{ role?: string; data?: any; }>` |
| `present` | Emits whenever the overlay has opened. Does not emit any data                                                         | `CustomEvent<any>`                            |


## Methods

### `hide(role?: string, data?: any) => Promise<void>`



#### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `role` | `string` |             |
| `data` | `any`    |             |

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"dialog"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
