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
formEl.addEventListener('formData', ev => {
  for (let [key, value] of ev.detail.entries()) {
    console.log(`${key}: ${value}`);
  }
});
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
