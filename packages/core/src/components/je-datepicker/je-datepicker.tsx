import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay, isToday, format, getDay } from 'date-fns';

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
  @State() monthYearPicker = false;

  componentDidLoad() {
    this.el.closest('je-page')?.addEventListener('themeChange', ev => this.isDark = ev.detail === 'dark');
  }

  @Watch('value')
  valueChangeHandler() {
    this.valueChange.emit(this.value ? new Date(this.value) : undefined);
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
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const firstDayOfMonth = startOfMonth(this.currentDate);
    const lastDayOfMonth = endOfMonth(this.currentDate);
    const firstDayOfWeek = getDay(firstDayOfMonth);
    const lastDayOfWeek = getDay(lastDayOfMonth);
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

    const prevMonth = subMonths(this.currentDate, 1);
    const prevMonthEnd = endOfMonth(prevMonth);

    const daysBefore = Array.from({ length: firstDayOfWeek }).map((_, i) =>
      subMonths(this.currentDate, 1).setDate(prevMonthEnd.getDate() - (firstDayOfWeek - i - 1))
    );
    const daysAfter = Array.from({ length: 6 - lastDayOfWeek }).map((_, i) =>
      addMonths(this.currentDate, 1).setDate(i + 1)
    );

    return (
      <Host>
        <div class="header">
          <div onClick={() => this.monthYearPicker = !this.monthYearPicker}>
            <span>{format(this.currentDate, 'MMMM yyyy')}</span>
            <je-button fill='clear' iconOnly={true}>
              <je-icon class={{ open: this.monthYearPicker }} icon='expand_more' />
            </je-button>
          </div>
          <je-button iconOnly={true} fill='clear' onClick={this.prevMonth}>
            <je-icon fill={true} icon='arrow_left' />
          </je-button>
          <je-button iconOnly={true} fill='clear' onClick={this.nextMonth}>
            <je-icon icon='arrow_right' fill={true} />
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
                onClick={() => this.value = day}
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
