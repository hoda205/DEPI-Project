import { useState, useEffect } from 'react';
import './AppointmentModal.css'

export default function AppointmentModal({ isOpen, onClose, onAddEvent, selectedSlot, editingEvent }) {
    const [minTime, setMinTime] = useState('');
    const [maxTime, setMaxTime] = useState('');

    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [timef, setTimef] = useState('');
    const [timet, setTimet] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (isOpen) {
            if (editingEvent) {
                setAddress(editingEvent.address);
                setDate(editingEvent.date);
                setTimef(editingEvent.from);
                setTimet(editingEvent.to);
                setNotes(editingEvent.notes);
                setMinTime(editingEvent.from);
                setMaxTime(editingEvent.to);
            } else if (selectedSlot) {
                setAddress('');
                setDate(selectedSlot.date);
                setTimef(selectedSlot.from);
                setTimet(selectedSlot.to);
                setNotes('');
                setMinTime(selectedSlot.from);
                setMaxTime(selectedSlot.to);
            } else {
                setAddress('');
                setDate('');
                setTimef('');
                setTimet('');
                setNotes('');
                setMinTime('');
                setMaxTime('');
            }
        }
    }, [isOpen, selectedSlot, editingEvent]);

    const handelSubmit = (e) => {
        e.preventDefault();
        
        onAddEvent({
            address,
            date,
            from: timef,
            to: timet,
            notes
        });
    };

    return (
        <>
            {isOpen &&
                <div className="modal-container" onClick={onClose}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header flex justify-between">
                            <h2>{editingEvent ? 'Edit Appointment' : 'Add Appointment'}</h2>
                            <button className="close-btn" onClick={onClose}>X</button>
                        </div>
                        <form onSubmit={handelSubmit}>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input required type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input required type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="timef">From</label>
                                    <input required type="time" name="timef" id="timef" max={maxTime} value={timef} onChange={(e) => { setMinTime(e.target.value); setTimef(e.target.value); }}/>
                                </div>
                                <div>
                                    <label htmlFor="timet">To</label>
                                    <input required type="time" name="timet" id="timet" min={minTime} value={timet} onChange={(e) => { setMaxTime(e.target.value); setTimet(e.target.value); }}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="notes">Notes</label>
                                <textarea name="notes" id="notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                            </div>
                            <div className="modal-actions flex gap-3 flex-col">
                                <button type="submit" className="submit-btn">
                                    {editingEvent ? 'Save Changes' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}