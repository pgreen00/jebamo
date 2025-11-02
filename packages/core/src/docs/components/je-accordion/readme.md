---
title: "JeAccordion | <je-accordion>"
sidebar_label: "Accordion"
layout: docs.njk
---

<!-- Auto Generated Below -->


## Overview

Accordions are wrappers for [JeDetails](../je-details). When an inner detail is opened, the others are automatically closed.
The implementation follows the [aria implementation of an accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Usage

### 

::: live-code-demo

```html
<je-accordion>
  <je-details summary="Detail A" open> Inner content </je-details>
  <je-divider></je-divider>
  <je-details summary="Detail B"> Inner content </je-details>
  <je-divider></je-divider>
  <je-details summary="Detail C"> Inner content </je-details>
</je-accordion>
```

```javascript
console.log("yolo");
```

:::



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
