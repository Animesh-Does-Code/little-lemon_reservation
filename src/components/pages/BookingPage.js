import React from "react";
import BookingForm from "../BookingForm";
import "./BookingPage.css"

const BookingPage = ({OnFormSubmit, AvailableTimes, changeOccasion, changeTime, changeGuests, changeDate, date, time, occasion, guests, guestErrors, dateErrors, timeErrors}) => {
    return (
        <BookingForm OnFormSubmit={OnFormSubmit} AvailableTimes={AvailableTimes} changeOccasion={changeOccasion} changeTime={changeTime} changeGuests={changeGuests} changeDate={changeDate} date={date} time={time} occasion={occasion} guests={guests} guestErrors={guestErrors} dateErrors={dateErrors} timeErrors={timeErrors}/>
    )
}

export default BookingPage;