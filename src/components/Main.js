import React, { useState, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js"
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import "./Main.css"
import ConfirmedBooking from "./pages/ConfirmedBooking.js";


const Main = () => {
    const [date, setDate] = useState("0");
    const [time, setTime] = useState("0");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");


    function changeDate(event) {
        const selected = event.target.value

        setDate(selected);

        dispatch(selected);
    }

    function changeTime(event) {
        setTime(event.target.value);
    }

    function changeGuests(event) {
        const guests = event.target.value
        setGuests(guests);
    }

    function changeOccasion(event) {
        setOccasion(event.target.value);
    }

    const [availableTimes, dispatch] = useReducer(UpdateTimes, initializeTimes())

    function AvailableTimes() {
        return (
            availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
            ))
        )
    }

    function OnFormSubmit(e) {
        console.log({date, time, guests, occasion});
        const submitData = window.submitAPI(e.target.value);
        if (submitData === true) {
            return true
        }
    }

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<HomePage />}></Route>
                        <Route path="/booking" element={<BookingPage OnFormSubmit={OnFormSubmit} AvailableTimes={AvailableTimes} changeOccasion={changeOccasion} changeTime={changeTime} changeGuests={changeGuests} changeDate={changeDate} date={date} time={time} occasion={occasion} guests={guests}/>}></Route>
                        <Route path="/about" element={<HomePage />}></Route>
                        <Route path="/order" element={<HomePage />}></Route>
                        <Route path="/login" element={<HomePage />}></Route>
                        <Route path="/menu" element={<HomePage />}></Route>
                        <Route path="/bookingconfirm" element={<ConfirmedBooking />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export function UpdateTimes(state, action) {
    state = window.fetchAPI(new Date(action))

    return state;
}


export function initializeTimes() {
    const initialState = window.fetchAPI(new Date())

    return initialState;
}

export default Main;