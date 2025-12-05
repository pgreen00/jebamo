Set the `duration` attribute to have the alert close automatically after the specified amount of milliseconds. The timer will be paused if the user hovers their mouse over the alert, and will resume when the mouse leaves.

::: live-code-demo

```html
<je-button id="show-progress-alert-button">Open Alert</je-button>
<je-alert id="progress-alert" duration="3000" class="je-margin-top-sm">
  Hello there
</je-alert>
```

```javascript
const button = document.querySelector("#show-progress-alert-button");
const alert = document.querySelector("#progress-alert");
button.addEventListener("click", () => {
  alert.open = true;
});
```

:::
