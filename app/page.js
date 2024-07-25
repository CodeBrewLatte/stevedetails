"use client";

import Layout from './components/Layout';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.wrapper}>
            <h1>Dedicated to Keeping Your Car Looking Clean</h1>
            <p>Steve's Car Detailing is a mobile service to clean your car right from your driveway. Book an appointment with me today!</p>
            <Link href="/booking" className={styles.bookNow}>Book A Wash</Link>
            <div className={styles.contactInfo}>
              <span>Send me an email: stevedetailsNJ@gmail.com</span>
              <br></br>
              <span>Our Location: Manahawkin, NJ</span>
            </div>
          </div>
        </section>
        
        <section className={styles.howItWorks}>
  <h2>How Does It Work?</h2>
  <div className={styles.stepsContainer}>
    <div className={styles.steps}>
      <div className={styles.step}>
        <img src="/car.png" alt="Set Up an Appointment" />
        <h3>01. Set Up an Appointment</h3>
        <p>Contact me via text or email to schedule an appointment. I will visit your location to inspect your car and provide you with a detailed quote.</p>
      </div>
      <div className={styles.step}>
        <img src="/calendar.png" alt="Receive Your Invoice & Secure Time" />
        <h3>02. Receive Your Invoice & Secure Time</h3>
        <p>After the inspection, I will send you an invoice through email or text, along with available time slots for the service. Payment can be made via cash or Zelle.</p>
      </div>
      <div className={styles.step}>
        <img src="/cleaning.png" alt="Cleaning Process" />
        <h3>03. Cleaning Process</h3>
        <p>The cleaning process can take anywhere from 1 to 3 hours, depending on the condition of the vehicle. I am committed to making your car look fantastic!</p>
      </div>
    </div>
  </div>
</section>
      </div>
    </Layout>
  );
}
