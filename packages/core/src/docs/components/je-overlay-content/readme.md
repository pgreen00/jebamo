---
title: 'JeOverlayContent | <je-overlay-content>'
sidebar_label: 'Overlay Content'
---
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `closable` | `closable` |             | `boolean` | `true`      |
| `label`    | `label`    |             | `string`  | `undefined` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"label"` |             |


## Dependencies

### Depends on

- [je-toolbar](../je-toolbar)
- [je-button](../je-button)
- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-overlay-content --> je-toolbar
  je-overlay-content --> je-button
  je-overlay-content --> je-icon
  je-button --> je-loading
  style je-overlay-content fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
