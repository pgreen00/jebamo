import { Component, Element, Event, EventEmitter, Fragment, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay, isToday, format, getDay, set, setHours, setMinutes, setSeconds } from 'date-fns';

@Component({
  tag: 'je-datepicker',
  styleUrl: 'je-datepicker.scss',
  shadow: true,
})
export class JeDatepicker {
  @Element() el!: HTMLJeDatepickerElement;
  @State() currentDate = new Date();
  @State() isDark = false;
  @Prop() type: 'date' | 'datetime' | 'time' = 'datetime';
  @Prop() years = true;
  @Prop() months = true;
  @Prop() days = true;
  @Prop() hours = true;
  @Prop() minutes = true;
  @Prop() seconds = false;
  @Prop({ mutable: true }) value?: number;
  @Event() valueChange: EventEmitter<number | undefined>;

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

  setDay = (day: Date) => {
    this.value = set(this.value, {
      year: day.getFullYear(),
      month: day.getMonth(),
      date: day.getDate()
    }).getTime();
  }

  setHour = (hour: number) => {
    this.value = setHours(this.value, hour).getTime();
  }

  setMinute = (minute: number) => {
    this.value = setMinutes(this.value, minute).getTime();
  }

  setSecond = (second: number) => {
    this.value = setSeconds(this.value, second).getTime();
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
        {(this.type == 'date' || this.type == 'datetime') && (
          <Fragment>
            <div class="header">
              {this.years && (
                <je-button iconOnly={true} fill='clear' onClick={this.prevYear}>
                  <je-icon size='sm' fill={true} icon='keyboard_double_arrow_left' />
                </je-button>
              )}
              {this.months && (
                <je-button iconOnly={true} fill='clear' onClick={this.prevMonth}>
                  <je-icon size='sm' fill={true} icon='keyboard_arrow_left' />
                </je-button>
              )}
              <span>{format(this.currentDate, 'MMMM yyyy')}</span>
              {this.months && (
                <je-button iconOnly={true} fill='clear' onClick={this.nextMonth}>
                  <je-icon size='sm' fill={true} icon='keyboard_arrow_right' />
                </je-button>
              )}
              {this.years && (
                <je-button iconOnly={true} fill='clear' onClick={this.nextYear}>
                  <je-icon size='sm' fill={true} icon='keyboard_double_arrow_right' />
                </je-button>
              )}
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
                    onClick={() => this.setDay(day)}
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
          </Fragment>
        )}
        {(this.type == 'time' || this.type == 'datetime') && (
          <div class='timepicker'>
            <span>Time</span>
            <je-popover showBackdrop={true} arrow={true}>
              <je-pill slot='trigger'>{this.value ? (
                this.hours && this.minutes && this.seconds ? format(this.value, 'hh:mm:ss a') :
                this.hours && this.minutes ? format(this.value, 'hh:mm a') :
                this.hours ? format(this.value, 'hh a') : '-'
              ) : '-'}</je-pill>
              <div class='timepicker-content'>
                {this.hours && (
                  <div class='timepicker-column'>
                    {Array.from({ length: 24 }).map((_, hour) => (
                      <je-button
                        size='sm'
                        color={this.currentDate.getHours() === hour ? 'primary' : this.isDark ? 'light' : 'dark'}
                        fill={this.currentDate.getHours() === hour ? 'solid' : 'clear'}
                        onClick={() => this.setHour(hour)}
                      >
                        {format(new Date().setHours(hour), 'hh a')}
                      </je-button>
                    ))}
                  </div>
                )}
                {this.minutes && (
                  <div class='timepicker-column'>
                    {Array.from({ length: 60 }).map((_, minute) => (
                      <je-button
                        size='sm'
                        color={this.currentDate.getMinutes() === minute ? 'primary' : this.isDark ? 'light' : 'dark'}
                        fill={this.currentDate.getMinutes() === minute ? 'solid' : 'clear'}
                        onClick={() => this.setMinute(minute)}
                      >
                        {format(new Date().setMinutes(minute), 'mm')}
                      </je-button>
                    ))}
                  </div>
                )}
                {this.seconds && (
                  <div class='timepicker-column'>
                    {Array.from({ length: 60 }).map((_, second) => (
                      <je-button
                        size='sm'
                        color={this.currentDate.getSeconds() === second ? 'primary' : this.isDark ? 'light' : 'dark'}
                        fill={this.currentDate.getSeconds() === second ? 'solid' : 'clear'}
                        onClick={() => this.setSecond(second)}
                      >
                        {format(new Date().setSeconds(second), 'ss')}
                      </je-button>
                    ))}
                  </div>
                )}
              </div>
            </je-popover>
          </div>
        )}
      </Host>
    );
  }
}
