import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Notification from './components/notification'

import Achievements from './components/achievements'
import Teams from './components/teams'
import Counselling from './components/counselling'
import Journey from './components/journey'

import rocket from '../public/rocket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faChevronUp);

import styles from '@/styles/Home.module.css'
import ExploreCourses from './components/exploreCourses'

export default function Home() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  const handleScroll = (e) => {

    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <>
      <Head>
        <title>Origin Institute</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main} >

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.hero_content}>
            <h3 className={`${styles.heroName} fst-italic`}>Shyamal Gawande Sir&apos;s & Shrikant Lohakare Sir&apos;s</h3>
            <h1 className={styles.animateHero}>Origin Institute</h1>
            <p className={styles.animateHero}>Pioneering excellence in Akola.</p>
            <Link href="#srvce" className={`${styles.heroButtons} ${styles.animateHero} me-1`} onClick={handleScroll}  >Get Started <FontAwesomeIcon icon={faArrowRight} beat className='ms-2' /></Link>
          </div>
        </div>
        {/* Hero section end */}

        {/* Notification section */}

        <Notification />
        {/* Notification section end */}



        {/* <!-- Carousal section --> */}
        <Achievements />

        {/* Carousel section end */}

        {/* Explore Courses */}
        <ExploreCourses />
        {/* Explore Courses end */}

        {/* <!-- Team Section --> */}
        <Teams />

        {/* Team Section end */}

        {/* <!-- Counselling section --> */}
        <Counselling />

        {/* Journey Section */}
        <Journey />
        {/* Journey Section end */}

        {/* <!-- Counselling section  end--> */}
      </main >
      {showButton && (
        <button onClick={scrollToTop} className={styles.backToTop}>
          <Image src={rocket} alt=".." className='rounded-circle img-fluid' />
          {/* <FontAwesomeIcon icon={faChevronUp}/> */}
        </button>
      )}
    </>
  )
}
