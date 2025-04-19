---
title: 'JeActionSheet | <je-action-sheet>'
sidebar_label: 'Action Sheet'
---
<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                             | Type                          | Default     |
| ------------ | ------------- | ------------------------------------------------------- | ----------------------------- | ----------- |
| `destroy`    | `destroy`     | Optionally execute a promise before closing begins      | `() => void \| Promise<void>` | `undefined` |
| `init`       | `init`        | Optionally execute a promise before presentation begins | `() => void \| Promise<void>` | `undefined` |
| `maxPercent` | `max-percent` | Maximum height (expanded fullscreen).                   | `number`                      | `90`        |
| `midPercent` | `mid-percent` | Intermediate height (mid state).                        | `number`                      | `60`        |
| `minPercent` | `min-percent` | Minimum height (collapsed state).                       | `number`                      | `30`        |
| `open`       | `open`        | Opens and closes modal                                  | `boolean`                     | `false`     |


## Events

| Event     | Description                                                                                                          | Type                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `dismiss` | Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method. | `CustomEvent<{ role?: string; data?: any; }>` |
| `present` | Emits whenever the drawer has opened. Does not emit any data                                                         | `CustomEvent<any>`                            |


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
