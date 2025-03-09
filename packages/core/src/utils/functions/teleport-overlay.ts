export const teleportOverlay = (overlay: HTMLElement, placeholder: Comment, triggerDataId: string, undo = false) => {
  if (undo) {
    overlay.remove()
    placeholder.replaceWith(overlay)
    const trigger = overlay.previousElementSibling as HTMLElement
    if (trigger && trigger.dataset['trigger'] === triggerDataId) {
      delete trigger.dataset['trigger']
      trigger.slot = 'trigger'
      trigger.remove()
      overlay.append(trigger)
    }
  } else {
    overlay.replaceWith(placeholder)
    document.body.appendChild(overlay)
    const trigger = overlay.querySelector<HTMLElement>(':scope > [slot=trigger]')
    if (trigger) {
      trigger.dataset['trigger'] = triggerDataId
      trigger.slot = overlay.slot || ''
      trigger.remove()
      placeholder.before(trigger)
    }
  }
}
