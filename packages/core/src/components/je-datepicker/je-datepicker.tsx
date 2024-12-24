import { Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay, isToday, format, getDay } from 'date-fns';

@Component({
  tag: 'je-datepicker',
  styleUrl: 'je-datepicker.scss',
  shadow: true,
})
export class JeDatepicker {
  @Element() el!: HTMLJeDatepickerElement;
  @State() currentDate = new Date();
  @Prop({ mutable: true }) value?: number;
  @Event() valueChange: EventEmitter<number | undefined>;
  @State() isDark = false;

  componentWillLoad() {
    if (this.value) {
      this.currentDate = new Date(this.value);
    }
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.isDark = e.detail === 'dark';
  }

  @Watch('value')
  valueChangeHandler() {
    if (this.value) {
      this.currentDate = new Date(this.value);
    }
    this.valueChange.emit(this.value ? new Date(this.value).getTime() : undefined);
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

  nextYear = () => {
    this.currentDate = addMonths(this.currentDate, 12);
  }

  prevYear = () => {
    this.currentDate = subMonths(this.currentDate, 12);
  }

  render() {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const firstDayOfMonth = startOfMonth(this.currentDate);
    const lastDayOfMonth = endOfMonth(this.currentDate);
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

    const prevMonth = subMonths(this.currentDate, 1);
    const prevMonthEnd = endOfMonth(prevMonth);

    const firstDayOfWeek = getDay(firstDayOfMonth);
    const daysBefore = Array.from({ length: firstDayOfWeek }).map((_, i) =>
      subMonths(this.currentDate, 1).setDate(prevMonthEnd.getDate() - (firstDayOfWeek - i - 1))
    );

    const lastDayOfWeek = getDay(lastDayOfMonth);
    const daysAfter = Array.from({ length: 6 - lastDayOfWeek }).map((_, i) =>
      addMonths(this.currentDate, 1).setDate(i + 1)
    );

    return (
      <Host>
        <div class="header">
          <je-button iconOnly={true} fill='clear' onClick={this.prevYear}>
            <je-icon size='sm' fill={true} icon='keyboard_double_arrow_left' />
          </je-button>
          <je-button iconOnly={true} fill='clear' onClick={this.prevMonth}>
            <je-icon size='sm' fill={true} icon='keyboard_arrow_left' />
          </je-button>
          <span>{format(this.currentDate, 'MMMM yyyy')}</span>
          <je-button iconOnly={true} fill='clear' onClick={this.nextMonth}>
            <je-icon size='sm' icon='keyboard_arrow_right' fill={true} />
          </je-button>
          <je-button iconOnly={true} fill='clear' onClick={this.nextYear}>
            <je-icon size='sm' icon='keyboard_double_arrow_right' fill={true} />
          </je-button>
        </div>

        <div class="weekdays-grid">
          {daysOfWeek.map(day => <div>{day}</div>)}
        </div>

        <div class="days-grid">
          {daysBefore.map(day => (
            <je-button expand={true} disabled={true} color='medium' fill='clear' class='day'>
              {format(day, 'd')}
            </je-button>
          ))}

          {daysInMonth.map(day => {
            const selected = this.value && isSameDay(day, this.value);
            const today = isToday(day);
            return (
              <je-button
                expand={true}
                color={selected || today ? 'primary' : this.isDark ? 'light' : 'dark'}
                fill={selected ? 'solid' : 'clear'}
                class='day'
                onClick={() => this.value = day.getTime()}
              >
                {format(day, 'd')}
              </je-button>
            );
          })}

          {daysAfter.map(day => (
            <je-button expand={true} disabled={true} color='medium' fill='clear' class='day'>
              {format(day, 'd')}
            </je-button>
          ))}
        </div>
      </Host>
    );
  }
}
