---
title: 'JeMenuOption | <je-menu-option>'
sidebar_label: 'Menu Option'
---
<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `checked`  | `checked`  |             | `boolean` | `false`     |
| `disabled` | `disabled` |             | `boolean` | `undefined` |
| `value`    | `value`    |             | `string`  | `undefined` |


## Events

| Event              | Description | Type                  |
| ------------------ | ----------- | --------------------- |
| `menuOptionSelect` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [je-toolbar](../je-toolbar)
- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-menu-option --> je-toolbar
  je-menu-option --> je-icon
  style je-menu-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
