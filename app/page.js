"use client";

import Layout from './components/Layout';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
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
      </div>
    </Layout>
  );
}
