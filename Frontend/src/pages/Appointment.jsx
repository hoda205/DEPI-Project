import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import AppointmentModal from "../components/AppointmentModal";
import "../components/AppointmentModal.css";

import "./Appointment.css"
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    const startDateObj = new Date(selectInfo.startStr);
    const endDateObj = new Date(startDateObj.getTime() + 30 * 60 * 1000);

    const date = selectInfo.startStr.split('T')[0];
    const from = startDateObj.toTimeString().substring(0, 5);
    const to = endDateObj.toTimeString().substring(0, 5);

    setEditingEvent(null);
    setSelectedSlot({ date, from, to });
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    const eventObj = clickInfo.event;

    const date = eventObj.startStr.split('T')[0];
    const from = new Date(eventObj.start).toTimeString().substring(0, 5);
    const to = new Date(eventObj.end).toTimeString().substring(0, 5);

    setEditingEvent({
      id: eventObj.id,
      address: eventObj.title,
      date: date,
      from: from,
      to: to,
      notes: eventObj.extendedProps.notes || ''
    });
    
    setIsModalOpen(true);
  };

  const handleSaveAppointment = (newEventData) => {
    const startDateTime = `${newEventData.date}T${newEventData.from}`;
    const endDateTime = `${newEventData.date}T${newEventData.to}`;

    if (editingEvent) {
      const updatedEvents = events.map((ev) => 
        ev.id === editingEvent.id 
          ? { 
              ...ev, 
              title: newEventData.address, 
              start: startDateTime, 
              end: endDateTime, 
              extendedProps: { notes: newEventData.notes, address: newEventData.address } 
            }
          : ev
      );
      setEvents(updatedEvents);
    } else {
      const newEvent = {
        id: String(Date.now()), 
        title: newEventData.address,
        start: startDateTime,
        end: endDateTime,
        extendedProps: {
          notes: newEventData.notes,
          address: newEventData.address
        }
      };
      setEvents([...events, newEvent]);
    }

    setIsModalOpen(false);
    setSelectedSlot(null);
    setEditingEvent(null);
  };

  return (
    <div className="p-7 Appointment">
      <button className="plus-icon-button" type="button" onClick={() => { setEditingEvent(null); setSelectedSlot(null); setIsModalOpen(true); }}>
        <Plus className="plus-icon" />
      </button>

      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        height="80vh"
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        events={events} 
        select={handleDateSelect}
        eventClick={handleEventClick}
      />

      <AppointmentModal  
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setSelectedSlot(null); setEditingEvent(null); }}
        onAddEvent={handleSaveAppointment} 
        selectedSlot={selectedSlot}
        editingEvent={editingEvent}
      />
    </div>
  )
}