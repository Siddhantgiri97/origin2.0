import React from 'react'
import Image from 'next/image'
import services from '../../public/Teacher.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck);
import styles from '@/styles/Home.module.css'

const Services = () => {
    
    return (
        <div className={styles.services} id='srvce'>
            <div className={styles.services_container}>
                <div className={styles.concont}>
                    <p className={`${styles.topline} ${styles.animateServices}`}>
                        Features
                    </p>
                    <h1 className={`${styles.services_heading} ${styles.animateServices}`}>What we offer</h1>
                    <div className={styles.services_features}>
                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Expert Faculty</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Comprehensive Material</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Doubt Sessions</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Performance Analytics</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Proved Exam Strategies</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Regular Mock Tests</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Personalized Guidance</p>

                        <p className={`${styles.services_feature} ${styles.animateServices}`}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0FBF7F" }} className="pe-1" /> Well-Equipped Library</p>
                    </div>
                </div>
                <div>
                    <Image src={services} alt='...' className={`${styles.services_img} ${styles.animateImg}`} />
                </div>
            </div>
        </div>
    )
}

export default Services