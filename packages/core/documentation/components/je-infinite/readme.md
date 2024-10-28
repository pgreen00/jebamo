
<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                   | Type      | Default |
| ------------ | ------------- | ----------------------------------------------------------------------------- | --------- | ------- |
| `loading`    | `loading`     | This must be manually set to true/false to show/hide the intersecting content | `boolean` | `false` |
| `rootMargin` | `root-margin` | Passed to observer api                                                        | `string`  | `'0px'` |
| `threshold`  | `threshold`   | Threshold passed to observer api                                              | `number`  | `0.8`   |


## Events

| Event       | Description                                                        | Type                |
| ----------- | ------------------------------------------------------------------ | ------------------- |
| `intersect` | Emitted when the bottom of the scroll container is in the viewport | `CustomEvent<void>` |


## Shadow Parts

| Part                    | Description |
| ----------------------- | ----------- |
| `"intersect-container"` |             |
| `"scroll-container"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
