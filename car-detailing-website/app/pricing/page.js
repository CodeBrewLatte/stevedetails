// app/pricing/page.js
"use client";

import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <div className={styles.container}>
      <h1>Our Pricing</h1>
      <ul className={styles.pricingList}>
        <li>
          <h3>Basic Detail</h3>
          <p>$50</p>
          <p>Exterior wash and wax, interior vacuum, and window cleaning.</p>
        </li>
        <li>
          <h3>Full Detail</h3>
          <p>$100</p>
          <p>Includes Basic Detail plus engine cleaning and upholstery shampoo.</p>
        </li>
        <li>
          <h3>Premium Detail</h3>
          <p>$150</p>
          <p>Includes Full Detail plus paint correction and ceramic coating.</p>
        </li>
      </ul>
    </div>
  );
}
