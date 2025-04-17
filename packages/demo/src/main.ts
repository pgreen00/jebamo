import './style.css'
import 'jebamo/styles/classes.css'
import 'jebamo/styles/variables.css'
import { defineCustomElements } from 'jebamo/loader'
import { createDialog, createToast } from 'jebamo';

defineCustomElements()

document.querySelector('je-breadcrumbs')?.addEventListener('expandClick', ev => ev.target.maxItems = 0)

const wizard = document.querySelector('je-wizard')!;
wizard.steps = [
    { label: 'Step 1' },
    { label: 'Step 2', optional: true },
    { label: 'Step 3' },
    { label: 'Step 4' },
]
wizard.addEventListener('stepChange', ev => console.log('stepChange', ev.detail))
wizard.addEventListener('finish', _ev => {
    const [dialog] = createDialog({
        header: 'Wizard',
        message: 'Wizard finished',
        icon: 'sentiment_satisfied',
        controls: [
            { placeholder: 'Additional information', name: 'additionalInfo' }
        ],
        buttons: [
            { text: 'Ok', color: 'primary', handler: (d) => d.hide(), type: 'submit' },
        ],
    })
    dialog.show();
})

setTimeout(() => {
    const toast = createToast({
        header: 'Toast',
        message: 'This is a toast',
        color: 'primary',
        duration: 5000,
        progress: true,
        icon: 'sentiment_satisfied',
        closable: true,
        position: 'bottom-start',
        buttons: [
            { text: 'Ok', color: 'primary', handler: (toast) => toast.hide() },
            { text: 'Cancel', color: 'secondary', handler: (toast) => toast.hide() },
        ],
    })
    toast.show();
}, 3000)
setTimeout(() => {
    const toast = createToast({
        header: 'Toast',
        message: 'This is a toast',
        color: 'primary',
        duration: 5000,
        progress: true,
        icon: 'sentiment_satisfied',
        closable: true,
        position: 'bottom-start',
        buttons: [
            { text: 'Ok', color: 'primary', handler: (toast) => toast.hide() },
            { text: 'Cancel', color: 'secondary', handler: (toast) => toast.hide() },
        ],
    })
    toast.show();
}, 4000)