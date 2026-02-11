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

- [je-toolbar](../je-toolbar)
- [je-icon](../je-icon)

### Graph
```mermaid
graph TD;
  je-details --> je-toolbar
  je-details --> je-icon
  style je-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


