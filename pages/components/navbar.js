import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import logo from '../../public/logo.png';
import styles from '../../styles/Home.module.css'




const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('active');
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('active');
    };

    return (
        <>
            <nav className={`${styles.navbars} shadow`}>
                <a href="/" className={styles.navbar_logo} ><Image src={logo} alt='...' />
                    <div>OriginInstitute</div>
                </a>
                <div className={`${styles.navbar_toggle} ${isMobileMenuOpen ? styles.isactive : ''}`} id={styles.mobileMenu} onClick={toggleMobileMenu}>
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles['barFirst'] : ''}`}></span>
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles['barSec'] : ''}`}></span>
                    <span className={`${styles.bar} ${isMobileMenuOpen ? styles['barThi'] : ''}`}></span>
                </div>
                <div className={`${styles.navbar_menu} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <Link href="/" className={`${styles.navbar_link}`} onClick={closeMobileMenu}>HOME</Link>
                    <Link href="/courses" className={`${styles.navbar_link}`} onClick={closeMobileMenu}>COURSES</Link>
                    <Link href="/gallery" className={`${styles.navbar_link}`} onClick={closeMobileMenu}>GALLERY</Link>
                    <Link href="https://wa.me/7776969462?text=Hii%20there%20" target="_blank"
                            rel="noopener noreferrer" className={`${styles.navbar_link}`} onClick={closeMobileMenu}>CONNECT US</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar