import './style.css'
import 'jebamo/styles/classes.css'
import 'jebamo/styles/variables.css'
import { defineCustomElements } from 'jebamo/loader'

defineCustomElements()

document.querySelector('#theme-button')?.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
})
