import React from 'react'
import Image from 'next/image'
import AmitSirImg from '../../public/Amit_sir1.png'
import ShriSirImg from '../../public/Shrikant_sir1.png'
import ShamSirImg from '../../public/shyamal_sir1.png'
import styles from '@/styles/Home.module.css'

const Teams = () => {
  return (
    <div className={styles.team}>
          <div className={styles.team_wrapper}>
            <div className={`${styles.team_text} ${styles.animateTeam}`}>
              <p className={styles.topline}>Personal Coaching</p>
              <h1>Meet our Faculty</h1>
              <p className={styles.team_desc}>All our faculty members have over 5+ years of experience. Each Faculty specializes in
                strength and diverse foundation. </p>
            </div>



            <div className={`${styles.team_card} ${styles.animateTeam}`}>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Shyamal Gawande </h3>
                </div>
              </div>
              <Image src={ShamSirImg} alt="" className={styles.team_img} />
            </div>
            <div className={`${styles.team_card} ${styles.animateTeam}`}>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Shrikant Lohakare </h3>
                </div>
              </div>
              <Image src={ShriSirImg} alt="" className={styles.team_img} />
            </div>
            <div className={`${styles.team_card} ${styles.animateTeam}`}>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Amit Sawai </h3>
                </div>
              </div>
              <Image src={AmitSirImg} alt="" className={styles.team_img} />
            </div>


            <div className={`${styles.team_text} ${styles.animateTeam}`}>
              <p className={styles.topline}>Faculty Expectations </p>
              <h1>Duties Review</h1>
              <p className={styles.team_desc}>Responsible for competent and effective performance of their duties and foster collegial relationships students. </p>
            </div>
          </div>
        </div>
  )
}

export default Teams