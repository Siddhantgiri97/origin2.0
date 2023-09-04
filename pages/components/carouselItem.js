import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const CarouselItem = (props) => {
    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className={styles.portfolioItem}>
                <Image className="img-fluid" src={props.studentImage} alt="..." />
                <div className={`${styles.portfoliocaption} shadow`} >
                    <div className={styles.portfoliocaptionheading}>{props.studentCollege}</div>
                    <div className={`${styles.portfoliocaptionsubheading} text-muted`}>{props.studentCity}</div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem