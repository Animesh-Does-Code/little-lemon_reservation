import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({OnFormSubmit, AvailableTimes, changeOccasion, changeTime, changeGuests, changeDate, date, time, occasion, guests}) {
    const navigate = useNavigate()
    const [guestErrors, setGuestErrors] = useState({});
    const currentDate = new Date().toISOString().split('T')[0];

    function handleDateChange(e) {
        changeDate(e);
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
            <h1 style={{fontFamily: "serif"}}>Reserve a Table</h1>
            <form id="bookingform" style={{display: 'grid', maxWidth: 200 + 'px', gap: 20 + 'px', padding: 1 + 'rem'}} onSubmit={formSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} min={currentDate} onChange={handleDateChange}/>
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
                <input type="submit" role="submit" value="Make Your reservation" aria-label="On Click" disabled={guestErrors.guests || date === "0"} ></input>
            </form>
        </>
    )
}

export default BookingForm;