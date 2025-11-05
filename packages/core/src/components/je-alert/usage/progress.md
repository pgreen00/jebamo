Set the `duration` attribute to have the alert close automatically after the specified amount of milliseconds. The timer will be paused if the user hovers their mouse over the alert, and will resume when the mouse leaves.

::: live-code-demo

```html
<je-alert
  id="progress-alert"
  header="hello there"
  duration="3000"
  class="je-margin-bottom-sm"
></je-alert>
<je-button id="show-progress-alert-button">Open Alert</je-button>
```

```javascript
const button = document.querySelector("#show-progress-alert-button");
const alert = document.querySelector("#progress-alert");
button.addEventListener("click", () => {
  alert.open = true;
});
```

:::
