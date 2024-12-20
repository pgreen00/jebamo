import { Component, Element, Event, EventEmitter, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'je-dropzone',
  styleUrl: 'je-dropzone.scss',
  shadow: true,
})
export class JeDropzone {
  @Element() el!: HTMLJeDropzoneElement;
  @Event() dataDrop: EventEmitter<DataTransfer>;

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark')
  }

  @Listen('drop', { passive: false })
  onDrop(e: DragEvent) {
    e.preventDefault();
    this.el.classList.remove('hover')
    this.dataDrop.emit(e.dataTransfer);
  }

  @Listen('dragover', { passive: false })
  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.el.classList.add('hover')
  }

  @Listen('dragleave', { passive: false })
  onDragLeave(e: DragEvent) {
    e.preventDefault();
    this.el.classList.remove('hover')
  }

  render() {
    return (
      <Host>
        <div part="content-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
