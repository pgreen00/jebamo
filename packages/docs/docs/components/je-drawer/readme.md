---
title: 'JeDrawer | <je-drawer>'
sidebar_label: 'Drawer'
---
<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                             | Type                          | Default     |
| ----------------- | ------------------ | ------------------------------------------------------- | ----------------------------- | ----------- |
| `backdropDismiss` | `backdrop-dismiss` | Backdrop will close the modal on click when enabled     | `boolean`                     | `true`      |
| `destroy`         | --                 | Optionally execute a promise before closing begins      | `() => void \| Promise<void>` | `undefined` |
| `init`            | --                 | Optionally execute a promise before presentation begins | `() => void \| Promise<void>` | `undefined` |
| `open`            | `open`             | Opens and closes modal                                  | `boolean`                     | `false`     |
| `side`            | `side`             | Side of the screen where the drawer will be displayed   | `"left" \| "right"`           | `'left'`    |


## Events

| Event           | Description                                                                                                          | Type                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `backdropClick` | Emits whenever the backdrop is clicked. Does not emit any data                                                       | `CustomEvent<any>`                            |
| `dismiss`       | Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method. | `CustomEvent<{ role?: string; data?: any; }>` |
| `present`       | Emits whenever the drawer has opened. Does not emit any data                                                         | `CustomEvent<any>`                            |


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

| Part                | Description |
| ------------------- | ----------- |
| `"dialog"`          |             |
| `"inner-container"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
