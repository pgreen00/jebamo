
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                 | Type      | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `backdropClose` | `backdrop-close` | Backdrop will close the modal on click when enabled                                                                                         | `boolean` | `true`      |
| `showBackdrop`  | `show-backdrop`  | Whether or not the backdrop will be visible to the user                                                                                     | `boolean` | `true`      |
| `trigger`       | `trigger`        | The id of the element that will present the modal on click. If not provided, you will have to manually present the modal using openModal(). | `string`  | `undefined` |


## Events

| Event        | Description                                                                                                               | Type                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `didDismiss` | Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method. | `CustomEvent<{ role: string; data: any; }>` |
| `didPresent` | Emits whenever the modal has opened. Does not emit any data                                                               | `CustomEvent<any>`                          |


## Methods

### `dismiss(role?: string, data?: any) => Promise<void>`



#### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `role` | `string` |             |
| `data` | `any`    |             |

#### Returns

Type: `Promise<void>`



### `present() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
