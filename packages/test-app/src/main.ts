import './style.css'
import 'jebamo/styles/classes.css'
import 'jebamo/styles/variables.css'
import { defineCustomElements } from 'jebamo/loader'

defineCustomElements()

const modal = document.querySelector('je-modal')!
const modalContent = document.querySelector<HTMLTemplateElement>('#modal-content')!
modal.init = () => {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container')
    contentContainer.appendChild(modalContent.content.cloneNode(true))
    modal.appendChild(contentContainer)
}
modal.destroy = () => {
    modal.querySelector('.content-container')?.remove()
}