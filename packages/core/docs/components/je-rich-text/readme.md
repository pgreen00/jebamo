---
title: 'JeRichText | <je-rich-text>'
sidebar_label: 'Rich Text Editor'
---
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type      | Default             |
| --------------- | ----------------- | ----------- | --------- | ------------------- |
| `disabled`      | `disabled`        |             | `boolean` | `false`             |
| `maxHeight`     | `max-height`      |             | `string`  | `'500px'`           |
| `minHeight`     | `min-height`      |             | `string`  | `'200px'`           |
| `placeholder`   | `placeholder`     |             | `string`  | `'Start typing...'` |
| `readonly`      | `readonly`        |             | `boolean` | `false`             |
| `showWordCount` | `show-word-count` |             | `boolean` | `true`              |
| `value`         | `value`           |             | `string`  | `''`                |


## Events

| Event          | Description | Type                             |
| -------------- | ----------- | -------------------------------- |
| `editorBlur`   |             | `CustomEvent<FocusEvent>`        |
| `editorChange` |             | `CustomEvent<EditorChangeEvent>` |
| `editorFocus`  |             | `CustomEvent<FocusEvent>`        |


## Methods

### `clear() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getContent() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `getText() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `setContent(html: string) => Promise<void>`



#### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `html` | `string` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
