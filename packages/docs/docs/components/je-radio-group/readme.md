---
title: 'JeRadioGroup | <je-radio-group>'
sidebar_label: 'Radio Group'
---
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                              | Type      | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------ | --------- | ----------- |
| `disabled`      | `disabled`       | Disables the controls                                                    | `boolean` | `false`     |
| `label`         | `label`          | Label that shows above the control                                       | `string`  | `undefined` |
| `note`          | `note`           | Additional info that shows below the control                             | `string`  | `undefined` |
| `originalValue` | `original-value` | Value the form will reset to. Defaults to initial value if not specified | `any`     | `undefined` |
| `required`      | `required`       | Requires a value before the form can be submitted                        | `boolean` | `undefined` |
| `value`         | `value`          | The currently selected value                                             | `any`     | `undefined` |


## Events

| Event         | Description                                  | Type               |
| ------------- | -------------------------------------------- | ------------------ |
| `valueChange` | Emits the selected value whenever it changes | `CustomEvent<any>` |


## Dependencies

### Depends on

- [je-label](../je-label)
- [je-note](../je-note)

### Graph
```mermaid
graph TD;
  je-radio-group --> je-label
  je-radio-group --> je-note
  style je-radio-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
