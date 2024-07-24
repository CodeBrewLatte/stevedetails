// app/about/page.js
"use client";

import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>We are a dedicated team of car enthusiasts providing top-notch car detailing services. With years of experience and a passion for cars, we guarantee the best care for your vehicle.</p>
      <h2>Meet the Team</h2>
      <div className={styles.team}>
        <div className={styles.teamMember}>
          <h3>Steve</h3>
          <p>Founder & Lead Detailer</p>
        </div>
        <div className={styles.teamMember}>
          <h3>John</h3>
          <p>Interior Specialist</p>
        </div>
        <div className={styles.teamMember}>
          <h3>Jane</h3>
          <p>Exterior Specialist</p>
        </div>
      </div>
    </div>
  );
}
