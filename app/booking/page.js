// app/booking/page.js
"use client";

import { useState } from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booked for ${date} at ${time}`);
  };

  return (
    <div className={styles.container}>
      <h1>Book a Time Slot</h1>
      <form onSubmit={handleBooking} className={styles.form}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
