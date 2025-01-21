---
title: 'JeButton | <je-button>'
sidebar_label: 'Button'
---
<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                      | Type                                                                                                                     | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `color`          | `color`            | Predefined colors. Auto will switch between light and dark based on the closest je-page's theme. | `"auto" \| "dark" \| "error" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `darkModeColor`  | `dark-mode-color`  | Overrides what the dark mode color will be when color is "auto".                                 | `"dark" \| "error" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"`           | `'light'`   |
| `disabled`       | `disabled`         | Disables button                                                                                  | `boolean`                                                                                                                | `false`     |
| `expand`         | `expand`           | Expands the button to the full width of it's container                                           | `boolean`                                                                                                                | `false`     |
| `fill`           | `fill`             | Button fill                                                                                      | `"clear" \| "outline" \| "solid"`                                                                                        | `'solid'`   |
| `iconOnly`       | `icon-only`        | Removes the padding, ideal for turning an icon or image into a button                            | `boolean`                                                                                                                | `false`     |
| `lightModeColor` | `light-mode-color` | Overrides what the light mode color will be when color is "auto".                                | `"dark" \| "error" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"`           | `'dark'`    |
| `size`           | `size`             | Button size                                                                                      | `"lg" \| "md" \| "sm"`                                                                                                   | `'md'`      |
| `type`           | `type`             | Can set to submit or reset to participate in forms                                               | `string`                                                                                                                 | `'button'`  |


## Shadow Parts

| Part             | Description |
| ---------------- | ----------- |
| `"inner-button"` |             |


## Dependencies

### Used by

 - [je-datepicker](../je-datepicker)
 - [je-dialog](../je-dialog)
 - [je-page](../je-page)
 - [je-toast](../je-toast)

### Graph
```mermaid
graph TD;
  je-datepicker --> je-button
  je-dialog --> je-button
  je-page --> je-button
  je-toast --> je-button
  style je-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
