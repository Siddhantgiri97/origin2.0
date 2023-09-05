import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import image1 from '../../public/1.png'
import image2 from '../../public/2.png'
import image3 from '../../public/3.png'

import styles from '@/styles/Home.module.css'

const Notification = () => {
    return (
        <>
            <div className={styles.notifyCar}>
                <div className="container ">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <Carousel className={styles.notify}>
                                <Carousel.Item className={styles.carAt}>
                                    <Image src={image1} alt='...' className={styles.carImg} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={image2} alt='...' className={styles.carImg} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={image3} alt='...' className={styles.carImg} />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification