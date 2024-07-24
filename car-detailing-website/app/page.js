// app/page.js
"use client";

import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Steve's Car Detailing</h1>
        <p>Your car deserves the best care. Shine like never before!</p>
      </header>
      <nav className={styles.nav}>
        <Link href="/booking">Book a Slot</Link>
        <Link href="/pricing">View Pricing</Link>
        <Link href="/about">About Us</Link>
      </nav>
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <h3>Exterior Detailing</h3>
            <p>Complete exterior wash, wax, and polish to make your car shine.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Interior Detailing</h3>
            <p>Thorough cleaning of the interior including seats, dashboard, and carpets.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Engine Detailing</h3>
            <p>Professional cleaning of the engine to keep it running smoothly.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 Steve's Car Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}
