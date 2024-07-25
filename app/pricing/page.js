"use client";

import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [carType, setCarType] = useState('');
  const [cleaningType, setCleaningType] = useState('');
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };

  const handleCleaningTypeChange = (e) => {
    setCleaningType(e.target.value);
  };

  const calculatePrice = () => {
    if (!carType || !cleaningType) {
      setError('Please select both car type and cleaning type.');
      setPrice(null);
      return;
    }

    setError('');
    let basePrice = 0;
    if (cleaningType === 'Exterior Only' || cleaningType === 'Interior Only') {
      if (carType === 'Sedan') basePrice = 70;
      if (carType === 'SUV') basePrice = 85;
      if (carType === 'Luxury') basePrice = 105;
    } else if (cleaningType === 'Interior + Exterior') {
      if (carType === 'Sedan') basePrice = 120;
      if (carType === 'SUV') basePrice = 150;
      if (carType === 'Luxury') basePrice = 190;
    }
    setPrice(basePrice);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Pricing Packages</h1>
        <div className={styles.priceList}>
          <div className={styles.selector}>
            <label htmlFor="carType">Select Car Type:</label>
            <select id="carType" value={carType} onChange={handleCarTypeChange}>
              <option value="">--Please choose an option--</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <div className={styles.selector}>
            <label htmlFor="cleaningType">Select Cleaning Type:</label>
            <select id="cleaningType" value={cleaningType} onChange={handleCleaningTypeChange}>
              <option value="">--Please choose an option--</option>
              <option value="Exterior Only">Exterior Only</option>
              <option value="Interior Only">Interior Only</option>
              <option value="Interior + Exterior">Interior + Exterior</option>
            </select>
          </div>
          <button className={styles.calculateButton} onClick={calculatePrice}>Calculate Price</button>
          {error && <div className={styles.error}>{error}</div>}
          {price !== null && !error && (
            <div className={styles.priceResult}>
              <h2>Estimated Price: ${price}</h2>
              <p>Please note this is just an estimate, depending on how dirty the car is or other factors like pet dander the price will be impacted. I will give you a final quote after inspecting your vehicle.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
