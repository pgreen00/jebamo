---
title: 'JeDetails | <je-details>'
sidebar_label: 'Details'
---
<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                | Default     |
| ------------ | ------------- | ----------- | ------------------- | ----------- |
| `iconSide`   | `icon-side`   |             | `"left" \| "right"` | `'right'`   |
| `iconToggle` | `icon-toggle` |             | `boolean`           | `false`     |
| `open`       | `open`        |             | `boolean`           | `false`     |
| `summary`    | `summary`     |             | `string`            | `undefined` |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `collapse` |             | `CustomEvent<any>` |
| `expand`   |             | `CustomEvent<any>` |


## Shadow Parts

| Part                  | Description |
| --------------------- | ----------- |
| `"content"`           |             |
| `"content-container"` |             |
| `"toggle"`            |             |


## Dependencies

### Depends on

- [je-icon](../je-icon)
- [je-toolbar](../je-toolbar)
- [je-icon-button](../je-icon-button)

### Graph
```mermaid
graph TD;
  je-details --> je-icon
  je-details --> je-toolbar
  je-details --> je-icon-button
  je-icon-button --> je-button
  je-icon-button --> je-icon
  je-button --> je-loading
  style je-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
