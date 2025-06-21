---
title: 'JeRichText | <je-rich-text>'
sidebar_label: 'Rich Text Editor'
---
<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                         | Type     | Default |
| -------- | --------- | ----------------------------------- | -------- | ------- |
| `value`  | `value`   | The content of the rich text editor | `string` | `''`    |


## Dependencies

### Depends on

- [je-divider](../je-divider)
- [je-icon-button](../je-icon-button)

### Graph
```mermaid
graph TD;
  je-rich-text --> je-divider
  je-rich-text --> je-icon-button
  je-icon-button --> je-button
  je-icon-button --> je-icon
  je-button --> je-loading
  style je-rich-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
