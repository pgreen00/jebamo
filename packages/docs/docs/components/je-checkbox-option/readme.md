---
title: 'JeCheckboxOption | <je-checkbox-option>'
sidebar_label: 'Checkbox Option'
---
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                       | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Whether or not this option is currently checked                   | `boolean` | `false`     |
| `disabled` | `disabled` | Shows disabled state and prevents changes to this option          | `boolean` | `false`     |
| `readonly` | `readonly` | Shows readonly state and prevents changes to this option          | `boolean` | `false`     |
| `value`    | `value`    | Value of this option that the checkbox group will compare against | `any`     | `undefined` |


## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Place the label in the default slot |


## Shadow Parts

| Part     | Description         |
| -------- | ------------------- |
| `"icon"` | The je-icon element |


## Dependencies

### Depends on

- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-checkbox-option --> je-icon
  style je-checkbox-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
