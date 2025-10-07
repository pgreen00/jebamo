---
title: 'JeWizard | <je-wizard>'
sidebar_label: 'Wizard'
---
<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                       | Default |
| -------- | --------- | ----------- | ------------------------------------------ | ------- |
| `steps`  | --        |             | `{ label: string; optional?: boolean; }[]` | `[]`    |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `finish`     |             | `CustomEvent<void>`   |
| `stepChange` |             | `CustomEvent<number>` |


## Methods

### `canSkip() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `next() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `reset() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `skip() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
