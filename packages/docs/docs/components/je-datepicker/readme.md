---
title: 'JeDatepicker | <je-datepicker>'
sidebar_label: 'Datepicker'
---
<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                             | Default      |
| ---------------- | ----------------- | ----------- | -------------------------------- | ------------ |
| `includeSeconds` | `include-seconds` |             | `boolean`                        | `false`      |
| `isDateDisabled` | --                |             | `(date: Date) => boolean`        | `undefined`  |
| `max`            | `max`             |             | `number`                         | `undefined`  |
| `min`            | `min`             |             | `number`                         | `undefined`  |
| `type`           | `type`            |             | `"date" \| "datetime" \| "time"` | `'datetime'` |
| `value`          | `value`           |             | `number`                         | `undefined`  |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `valueChange` |             | `CustomEvent<number>` |


## Dependencies

### Depends on

- [je-icon](../je-icon)
- [je-button](../je-button)
- [je-popover](../je-popover)
- [je-pill](../je-pill)

### Graph
```mermaid
graph TD;
  je-datepicker --> je-icon
  je-datepicker --> je-button
  je-datepicker --> je-popover
  je-datepicker --> je-pill
  style je-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
