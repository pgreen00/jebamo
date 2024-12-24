//main script for index.html

document.getElementById('toastButton').addEventListener('click', () => {
  document.getElementById('toast').open = true;
});

document.getElementById('toastButton2').addEventListener('click', async () => {
  const toast = await document.getElementById('main-page').presentToast({
    message: 'This is a toast',
    duration: 4000,
    progress: true,
    position: 'bottom-start',
    type: 'card',
    closable: true,
    icon: 'info',
    header: 'Hello there',
    buttons: [
      {
        text: 'Close',
        fill: 'outline',
        size: 'sm',
        color: 'auto',
        handler: t => t.dismiss('cancel')
      },
      {
        text: 'OK',
        fill: 'outline',
        size: 'sm',
        color: 'auto',
        handler: t => t.dismiss('confirm')
      },
    ],
  })
  console.log(await toast.didDismiss())
});

const customInputEl = document.getElementById('customInput');
customInputEl.validators = [
  val => {
    let errors = [];
    const num = Number(val);
    if (num <= 4) {
      errors.push('Value must be greater than 4');
    }
    if (num >= 12) {
      errors.push('Value must be less than 12');
    }
    return errors;
  },
];

const customFormatterEl = document.getElementById('customFormatter');
customFormatterEl.format = input => {
  const phoneNumber = input?.replace(/\D/g, '') ?? ''; // Remove all non-digit characters
  let formattedNumber = '';

  if (phoneNumber.length <= 7) {
    // Format as XXX-XXXX (no area code)
    if (phoneNumber.length > 3) {
      formattedNumber += `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3, 7)}`;
    } else {
      formattedNumber += phoneNumber;
    }
  } else {
    // Format as (XXX) XXX-XXXX
    // Add area code part
    if (phoneNumber.length > 0) {
      formattedNumber += `(${phoneNumber.substring(0, 3)}`;
    }
    if (phoneNumber.length >= 3) {
      formattedNumber += `) `;
    }

    // Add the first three digits
    if (phoneNumber.length > 3) {
      formattedNumber += `${phoneNumber.substring(3, 6)}`;
    }
    if (phoneNumber.length >= 6) {
      formattedNumber += `-`;
    }

    // Add the last four digits
    if (phoneNumber.length > 6) {
      formattedNumber += `${phoneNumber.substring(6, 10)}`;
    }
  }

  return formattedNumber;
};

function handlePanelToggle(side) {
  const el = document.getElementById('main-page');
  if (side == 'left') {
    const panelState = el.leftPanel;
    el.leftPanel = panelState === 'open' ? 'minimized' : 'open';
  } else {
    const panelState = el.rightPanel;
    el.rightPanel = panelState === 'open' ? 'closed' : 'open';
  }
}

function handleThemeToggle() {
  const el = document.getElementById('main-page');
  const themeState = el.theme;
  el.theme = themeState == 'light' ? 'dark' : 'light';
}

const formEl = document.getElementById('form');
formEl.addEventListener('formData', ev => console.log(ev.detail));
formEl.addEventListener('submit', ev => {
  var dialogElement = document.getElementById('formAlert');
  dialogElement.header = 'Form Submitted!';
  dialogElement.message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
  dialogElement.buttons = [
    { text: 'Cancel', fill: 'outline', handler: () => console.log('clicked') },
    { text: 'Ok', fill: 'solid', handler: () => console.log('clicked') },
  ];
  dialogElement.present();
});

document.getElementById('dateInput').value = '12/31/2021';
document.getElementById('dateInput').transform = 'date';

document.getElementById('timeInput').value = '12:00:00';
document.getElementById('timeInput').transform = {
  from: value => new Date(value).toLocaleTimeString(),
  to: value => new Date(value).toISOString(),
}

document.getElementById('dateInput').addEventListener('valueChange', ev => console.log(ev.detail));
document.getElementById('timeInput').addEventListener('valueChange', ev => console.log(ev.detail));
document.getElementById('dateTimeInput').addEventListener('valueChange', ev => console.log(ev.detail));

customElements.whenDefined('je-input').then(() => {
  const input = document.getElementById('datepicker')
  const picker = document.getElementById('inner-picker');
  picker.value = new Date(input.value).getTime();
  input.getInputElement().then(input => {
    input.addEventListener('click', ev => ev.preventDefault());
  })
  input.addEventListener('valueChange', ev => {
    if (ev.detail) {
      picker.value = new Date(ev.detail).getTime();
    }
  });
  picker.addEventListener('valueChange', ev => {
    if (ev.detail) {
      input.value = new Date(ev.detail).toISOString();
    }
  });
})

