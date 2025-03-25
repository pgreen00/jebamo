import { Component, Prop, Event, EventEmitter, Watch, h } from '@stencil/core';

@Component({
  tag: 'je-section',
  styleUrl: 'je-section.scss',
  shadow: true,
})
export class JeSection {
  @Prop() header?: string;
  @Prop() collapsible = false;
  @Prop({ mutable: true }) open = false;
  @Prop() iconSide: 'left' | 'right' = 'right';
  @Prop() iconToggle = false;
  @Event({ bubbles: false }) collapse: EventEmitter;
  @Event({ bubbles: false }) expand: EventEmitter;

  @Watch('open')
  watchOpen(newValue: boolean) {
    if (newValue) {
      this.expand.emit();
    } else {
      this.collapse.emit();
    }
  }

  private handleIconClick = () => {
    if (this.iconToggle)
      this.open = !this.open;
  }

  private handleContainerClick = () => {
    if (!this.iconToggle)
      this.open = !this.open;
  }

  render() {
    if (this.collapsible) {
      const icon = <je-icon class={{ [this.iconSide]: true, toggle: this.iconToggle }} onClick={this.handleIconClick}>expand_more</je-icon>
      return (
        <section part='section' class={{ open: this.open }}>
          <div part='header' class={{ toggle: this.iconToggle == false }} onClick={this.handleContainerClick}>
            {this.iconSide === 'left' && icon}
            <slot name='header'>
              {this.header && <h4>{this.header}</h4>}
            </slot>
            {this.iconSide === 'right' && icon}
          </div>
          <div part='content'>
            <div style={{ overflow: 'hidden'}}>
              <slot></slot>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section part='section'>
          <slot name='header'>
            {this.header && <h4>{this.header}</h4>}
          </slot>
          <slot></slot>
        </section>
      );
    }
  }
}
