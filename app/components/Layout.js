"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>Steve's Car Detailing</div>
          <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
            <Link href="/" onClick={toggleMenu} className={styles.menuItem}>Home</Link>
            <Link href="/about" onClick={toggleMenu} className={styles.menuItem}>About</Link>
            <Link href="/contact" onClick={toggleMenu} className={styles.menuItem}>Contact</Link>
            <Link href="/pricing" onClick={toggleMenu} className={styles.menuItem}>Pricing</Link>
            <Link href="/booking" onClick={toggleMenu} className={`${styles.menuItem} ${styles.cta}`}>Request A Quote</Link>
          </nav>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={`${styles.line} ${menuOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${menuOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${menuOpen ? styles.line3 : ''}`}></div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Steve's Car Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}
