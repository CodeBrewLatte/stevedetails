// app/booking/page.js
"use client";

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styles from './Booking.module.css';

export default function Booking() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('CalendlyLoaded', handleLoad);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      setTimeout(() => {
        const calendlyIframe = document.querySelector('.calendly-inline-widget iframe');
        if (calendlyIframe) {
          calendlyIframe.onload = () => {
            window.dispatchEvent(new Event('CalendlyLoaded'));
          };
        }
      }, 500);
    };
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('CalendlyLoaded', handleLoad);
    };
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Book a Time Slot</h1>
        {isLoading && <p>Loading...</p>}
        <div className={styles.calendlyWidget}>
          <div className="calendly-inline-widget" data-url="https://calendly.com/stevedetailsnj/30min" style={{ minWidth: '320px', height: '700px' }}></div>
        </div>
      </div>
    </Layout>
  );
}
