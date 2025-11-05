---
title: 'JeSelect | <je-select>'
sidebar_label: 'Select'
---
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                               | Default     |
| --------------- | ---------------- | ----------- | ---------------------------------- | ----------- |
| `disabled`      | `disabled`       |             | `boolean`                          | `false`     |
| `label`         | `label`          |             | `string`                           | `undefined` |
| `multiple`      | `multiple`       |             | `boolean`                          | `false`     |
| `note`          | `note`           |             | `string`                           | `undefined` |
| `options`       | --               |             | `{ value: any; label: string; }[]` | `undefined` |
| `originalValue` | `original-value` |             | `any`                              | `undefined` |
| `placeholder`   | `placeholder`    |             | `string`                           | `undefined` |
| `required`      | `required`       |             | `boolean`                          | `false`     |
| `size`          | `size`           |             | `"lg" \| "md" \| "sm"`             | `'md'`      |
| `value`         | `value`          |             | `any`                              | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"content"` |             |


## Dependencies

### Depends on

- [je-popover](../je-popover)
- [je-label](../je-label)
- [je-icon](../je-icon)
- [je-option](../je-option)
- [je-note](../je-note)

### Graph
```mermaid
graph TD;
  je-select --> je-popover
  je-select --> je-label
  je-select --> je-icon
  je-select --> je-option
  je-select --> je-note
  style je-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


