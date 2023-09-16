import Link from 'next/link'
import styles from '@/styles/Home.module.css'


const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_desc}>
                        <h1>ORIGIN INSTITUTE</h1>
                        <p>Z.P. Colony, Behind Siddheshwar Ganpati Mandir, Shastri Nagar, Akola.</p>
                        <p id="phone">+91-7776969462</p>
                        <p>origininstituteakola@gmail.com</p>
                    </div>
                    <div className={styles.footer_links}>
                        <h2 className={styles.footer_title}>Contact Us
                        </h2>
                        <Link href="/courses" className={styles.footer_link}>Courses</Link>
                        <Link href="/gallery" className={styles.footer_link}>Gallery</Link>
                        <Link href="https://wa.me/7776969462?text=Hii%20there%20" target="_blank"
                        rel="noopener noreferrer" className={styles.footer_link}>Connect us</Link>
                    </div>
                </div>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_links}>
                        <h2 className={styles.footer_title}>Media
                        </h2>
                        <Link href="https://www.instagram.com/origin_institute_akola/" className={styles.footer_link}>Instagram</Link>
                        <Link href="https://www.facebook.com/origininstituteakola/" className={styles.footer_link}>Facebook</Link>
                        <Link href="https://www.youtube.com/@shyamalgawande731" className={styles.footer_link}>YouTube</Link>
                    </div>
                    <div className={`${styles.footer_links}`}>
                        <h2 className={styles.footer_title}>Locate Us
                        </h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1112341535004!2d77.01284377478784!3d20.705707198796848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72ff1dc4aea19%3A0x8e314706edd34214!2sOrigin%20Institute!5e0!3m2!1sen!2sin!4v1693841802750!5m2!1sen!2sin"
                            frameBorder={0} width={400} height={200} aria-hidden="false" allowFullScreen tabIndex={0} style={{ borderRadius: "10px" }} className={styles.mapper}></iframe>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer