---
title: 'JeSelect | <je-select>'
sidebar_label: 'Select'
---
<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default     |
| ------------- | ------------- | ----------- | --------- | ----------- |
| `expand`      | `expand`      |             | `boolean` | `undefined` |
| `label`       | `label`       |             | `string`  | `undefined` |
| `placeholder` | `placeholder` |             | `string`  | `undefined` |
| `required`    | `required`    |             | `boolean` | `undefined` |
| `value`       | `value`       |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [je-popover](../je-popover)
- [je-input](../je-input)
- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-select --> je-popover
  je-select --> je-input
  je-select --> je-icon
  je-input --> je-icon
  je-input --> je-popover
  je-input --> je-color
  style je-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
