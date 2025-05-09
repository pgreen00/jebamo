import './style.css'
import 'jebamo/styles/classes.css'
import 'jebamo/styles/variables.css'
import { defineCustomElements } from 'jebamo/loader'

defineCustomElements()

document.querySelector('#theme-button')?.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
})

const dateinput = document.querySelector<HTMLJeTextfieldElement>('#mask')
const datepicker = document.querySelector<HTMLJeDatepickerElement>('#mask-dp')
if (dateinput && datepicker) {
  dateinput.addEventListener('valueChange', ev => {
    datepicker.value = ev.detail
  })
  datepicker.addEventListener('valueChange', ev => {
    dateinput.value = ev.detail
  })
}

