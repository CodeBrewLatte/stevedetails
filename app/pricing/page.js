"use client";

import Layout from '../components/Layout';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Pricing</h1>
        <div className={styles.priceList}>
          <div className={styles.priceItem}>
            <h2 className={styles.priceItemTitle}>Basic Exterior Wash</h2>
            <p className={styles.priceItemPrice}>$25</p>
            <p className={styles.priceItemDescription}>Includes a thorough exterior wash using safe, high-quality products.</p>
          </div>
          <div className={styles.priceItem}>
            <h2 className={styles.priceItemTitle}>Interior Vacuum and Wipe Down</h2>
            <p className={styles.priceItemPrice}>$40</p>
            <p className={styles.priceItemDescription}>Complete interior vacuum and wipe down of all surfaces with an all-purpose cleaner.</p>
          </div>
          <div className={styles.priceItem}>
            <h2 className={styles.priceItemTitle}>Full Interior Detail</h2>
            <p className={styles.priceItemPrice}>$75</p>
            <p className={styles.priceItemDescription}>Includes vacuuming, wipe down, and detailed cleaning of all interior surfaces.</p>
          </div>
          <div className={styles.priceItem}>
            <h2 className={styles.priceItemTitle}>Full Exterior and Interior Detail</h2>
            <p className={styles.priceItemPrice}>$100</p>
            <p className={styles.priceItemDescription}>Complete exterior wash and interior detailing, leaving your car looking like new.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
