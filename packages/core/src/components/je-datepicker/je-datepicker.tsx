import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay, isToday, format } from 'date-fns';

@Component({
  tag: 'je-datepicker',
  styleUrl: 'je-datepicker.scss',
  shadow: true,
})
export class JeDatepicker {
  @Element() el!: HTMLJeDatepickerElement;
  @State() currentDate = new Date();
  @Prop({ mutable: true }) value?: Date | string;
  @Event() valueChange: EventEmitter<Date | undefined>;
  @State() isDark = false;

  componentDidLoad() {
    this.el.closest('je-page')?.addEventListener('themeChange', ev => this.isDark = ev.detail === 'dark');
  }

  getDaysInMonth() {
    const start = startOfMonth(this.currentDate);
    const end = endOfMonth(this.currentDate);
    return eachDayOfInterval({ start, end });
  }

  nextMonth = () => {
    this.currentDate = addMonths(this.currentDate, 1);
  }

  prevMonth = () => {
    this.currentDate = subMonths(this.currentDate, 1);
  }

  render() {
    const daysInMonth = this.getDaysInMonth();
    return (
      <Host>
        <div class="header">
          <je-button iconOnly={true} fill='clear' onClick={this.prevMonth}>
            <je-icon fill={true} icon='arrow_left'/>
          </je-button>
          <span>{format(this.currentDate, 'MMMM yyyy')}</span>
          <je-button iconOnly={true} fill='clear' onClick={this.nextMonth}>
            <je-icon icon='arrow_right' fill={true}/>
          </je-button>
        </div>
        <div class="days-grid">
          {daysInMonth.map(day => {
            const selected = this.value && isSameDay(day, this.value);
            const today = isToday(day);
            return <je-button color={selected || today ? 'primary' : this.isDark ? 'light' : 'dark'} fill={selected ? 'solid' : 'clear'} class='day' onClick={() => this.value = day}>
              {format(day, 'd')}
            </je-button>
          })}
        </div>
        {this.value && (
          <div class="footer">
            <p>Selected Date: {format(this.value, 'MMMM d, yyyy')}</p>
          </div>
        )}
      </Host>
    );
  }
}
