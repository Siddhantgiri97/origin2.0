import React from 'react'
import Image from 'next/image'
import Meeting from '../../public/Meeting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck);
import styles from '@/styles/Home.module.css'

const Counselling = () => {
  return (
    <>
    <div className={styles.services}>
          <div className={styles.services_container}>
            <div>
              <Image src={Meeting} alt='...' className={`${styles.services_img} ${styles.animateImg} pe-2`} />
            </div>
            <div className={`${styles.concont} ps-5`}>
              <p className={`${styles.topline} ${styles.animateServices}`}>
                Path to Engineering Excellence
              </p>
              <h1 className={`${styles.services_heading} ${styles.animateServices}`}>Admission Counseling</h1>
              <p className={`${styles.services_feature} text-justify`}> Our seasoned team of experts possesses in-depth knowledge of the intricate admission processes of IITs, NITs, and Maharashtra&apos;s leading engineering colleges. We&apos;re committed to provide personalized guidance and ensure that you make well-informed decisions.<br></br> Here&apos;s what sets us apart:</p>
              <div className={styles.services_features}>

                <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Customized Guidance</p>

                <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Institutional Insights</p>

                <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Application Assistance</p>

                <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Backup Options</p>

                <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Financial Aid Guidance</p>

              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Counselling