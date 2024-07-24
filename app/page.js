"use client";

import Link from 'next/link';
import Head from 'next/head';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>Steve's Car Detailing</div>
          <nav className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/booking" className={styles.cta}>Request A Quote</Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <h1>Keep Your Car Clean Always</h1>
        <p>Steve's Car Detailing is dedicated to changing the way you think about car care.</p>
        <Link href="/booking" className={styles.bookNow}>Book A Wash</Link>
        <div className={styles.contactInfo}>
          <span>Call Us Now At: +8801730340103</span>
          <span>Our Location: Shibganj, Sylhet</span>
        </div>
      </section>

      <section className={styles.experience}>
        <h2>Based On Experience</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <img src="/placeholder1.jpg" alt="Service 1" />
            <p>Expert exterior detailing</p>
          </div>
          <div className={styles.serviceItem}>
            <img src="/placeholder2.jpg" alt="Service 2" />
            <p>Professional interior cleaning</p>
          </div>
          <div className={styles.serviceItem}>
            <img src="/placeholder3.jpg" alt="Service 3" />
            <p>Advanced paint correction</p>
          </div>
        </div>
      </section>

      <section className={styles.statistics}>
        <h2>Our Statistics</h2>
        <p>We have more than 10+ years of car services experience.</p>
        <p>We have more than 1.5k+ vehicles serviced.</p>
        <Link href="/about" className={styles.learnMore}>Learn More</Link>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Steve's Car Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}
