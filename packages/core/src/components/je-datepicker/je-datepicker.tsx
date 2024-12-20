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
  @Prop({ mutable: true }) value?: Date | string;
  @Event() valueChange: EventEmitter<Date | undefined>;
  @State() isDark = false;

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.isDark = e.detail === 'dark';
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
          <je-popover placement='bottom' arrow={true} showBackdrop={true}>
            <div slot='trigger'>
              <span>{format(this.currentDate, 'MMMM yyyy')}</span>
              <je-button fill='clear' iconOnly={true}>
                <je-icon icon='expand_more' />
              </je-button>
            </div>
            <div class='month-year-picker'>
              <je-button iconOnly={true} fill='clear' style={{ marginLeft: 'auto' }}>
                <je-icon icon='close' />
              </je-button>
              <div style={{ maxHeight: '150px', overflow: 'auto' }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <je-details summary={format(new Date(0, i), 'MMMM')}>
                    <je-button fill='clear' expand={true} onClick={() => this.currentDate.setMonth(i)}>
                      {format(new Date(0, i), 'MMMM')}
                    </je-button>
                    {Array.from({ length: 31 }).map((_, j) => (
                      <je-button fill='clear' expand={true} onClick={() => this.currentDate.setDate(j + 1)}>
                        {j + 1}
                      </je-button>
                    ))}
                  </je-details>
                ))}
              </div>
            </div>
          </je-popover>
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
