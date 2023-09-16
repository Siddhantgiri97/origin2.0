import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import TargetImg from '../../public/3d-target.png'
import image1 from '../../public/1.png'
import image2 from '../../public/2.png'
import image3 from '../../public/3.png'

import styles from '@/styles/Home.module.css'

const Notification = () => {

    const handleRegister = () => {
        alert("Link is not active yet. Contact Origin Institute.");
    }
    return (
        <>
            <div className={styles.notifyCar}>
                <div className="container">
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
                        <div className="col-lg-4 col-md-12 col-sm-12" id={styles.second}>

                            <div className={`${styles.card} shadow`}>
                                <div className={styles.header}>
                                    <div className={styles.image}>
                                        <Image src={TargetImg} alt='...' className={styles.svg} />
                                    </div>
                                    <div className={styles.content}>
                                        <span className={styles.title}>OSET</span>
                                        <p className={styles.message}> Register now for the Origin Entrance Test and embark on your journey to success!</p>
                                    </div>
                                    <div className={styles.actions}>
                                        <button type="button" className={styles.history} onClick={handleRegister}>Register</button>
                                        <p className='text-center pt-2'>OR</p>
                                        <Link href="https://wa.me/7776969462?text=Hi%20there%20" ><button type="button" className={styles.track}>Connect us</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification