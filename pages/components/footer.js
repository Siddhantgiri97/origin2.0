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
                        <Link href="/" className={styles.footer_link}>Contact</Link>
                        <Link href="/" className={styles.footer_link}>Support</Link>
                        <Link href="/" className={styles.footer_link}>Sponserships</Link>
                    </div>
                </div>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_links}>
                        <h2 className={styles.footer_title}>Media
                        </h2>
                        <Link href="/" className={styles.footer_link}>Instagram</Link>
                        <Link href="/" className={styles.footer_link}>Facebook</Link>
                        <Link href="/" className={styles.footer_link}>YouTube</Link>
                        <Link href="/" className={styles.footer_link}>Twitter</Link>
                    </div>
                    <div className={`${styles.footer_links}`}>
                        <h2 className={styles.footer_title}>Locate Us
                        </h2>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d233.25711695882868!2d77.0153509401797!3d20.70560008666587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd72fb79917cd9d%3A0xb90785b22f2eb4de!2sOrigin%20institute%20batch%2C%20Unnamed%20Road%2C%20Shastri%20Nagar%2C%20Akola%2C%20Maharashtra%20444001!3m2!1d20.7057239!2d77.0154048!5e0!3m2!1sen!2sin!4v1612861657638!5m2!1sen!2sin"
                             frameBorder={0} allowFullScreen="" width={400} height={200}
                        aria-hidden="false" tabIndex={0} style={{ borderRadius: "10px"}} className={styles.mapper}>
                    </iframe>
                </div>
            </div>
        </div >
        </>
    )
}

export default Footer