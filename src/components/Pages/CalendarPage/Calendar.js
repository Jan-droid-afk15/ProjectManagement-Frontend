import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { myevents } from "../.././Data";

const locales = {
  'en-GB': enGB,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = (props) => {
  const handleSelectEvent = (event) => {
    window.alert(event.title);
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = { start, end, title };
      myevents.push(newEvent);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myevents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default MyCalendar;
