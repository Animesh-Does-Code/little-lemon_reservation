import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({OnFormSubmit, AvailableTimes, changeOccasion, changeTime, changeGuests, changeDate, date, time, occasion, guests}) {
    const navigate = useNavigate()
    const [dateErrors, setDateErrors] = useState({});
    const [guestErrors, setGuestErrors] = useState({});

    function handleDateChange(e) {
        const selected = e.target.value
        const dateErrors = {}
        const currentDate = new Date().toISOString().split('T')[0];

        if (selected < currentDate) {
            dateErrors.date = 'Date cannot be before today.';
        }

        setDateErrors(dateErrors);

        changeDate(e);
        return Object.keys(dateErrors).length === 0;
    }

    function handleGuestsChange(e) {
        const guests = e.target.value
        const guestErrors = {}

        if (!guests || guests < 1) {
            guestErrors.guests = 'Number of guests has to be 1 or more.';
        }

        setGuestErrors(guestErrors);
        changeGuests(e);

        return Object.keys(guestErrors).length === 0;
    }

    function formSubmit(e) {
        e.preventDefault();
        if (OnFormSubmit(e) === true) {
            navigate("/bookingconfirm");
        }
    }

    return (
        <>
            <form id="bookingform" style={{display: 'grid', maxWidth: 200 + 'px', gap: 20 + 'px', padding: 1 + 'rem'}} onSubmit={formSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                {dateErrors.date && <p style={{ color: 'red' }}>{dateErrors.date}</p>}
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={changeTime}>=
                    <AvailableTimes />
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange}></input>
                {guestErrors.guests && <p style={{ color: 'red' }}>{guestErrors.guests}</p>}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={changeOccasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" role="submit" value="Make Your reservation" aria-label="On Click" disabled={guestErrors.guests || dateErrors.date || date === "0"} ></input>
            </form>
        </>
    )
}

export default BookingForm;