import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import story1 from '../../public/story1.jpg'

import story3 from '../../public/story3.jpg'

import styles from '@/styles/Home.module.css'

const Journey = () => {
    return (
        <>
            <section className={styles.pageSections} id="about">
                <div className="container my-5 ">
                    <div className="text-center mt-5 mb-5">
                        <h2 className={`${styles.sectionHeading} text-uppercase`}>Path to Progress</h2>
                        <h3 className={`${styles.sectionSubheading} text-muted`}>Discover how our institute&apos;s journey from inception to the present</h3>
                    </div>
                    <ul className={styles.timeline}>
                        <li>
                            <div className={styles.timelineImage}><Image className="rounded-circle img-fluid" src={story1} alt="..." /></div>
                            <div className={styles.timelinePanel}>
                                <div className={styles.timelineHeading}>
                                    <h4>2019-2020</h4>
                                    <h4 className={styles.subheading}>Our Humble Beginnings</h4>
                                </div>
                                <div className={styles.timelineBody}><p className="text-muted">In our inaugural year, we laid the foundation for our institute with a vision to make quality education accessible. We started small, with a handful of passionate educators and a commitment to nurturing talent.</p></div>
                            </div>
                        </li>
                        <li className={styles.timelineInverted}>
                            <div className={styles.timelineImage}><Image className={` rounded-circle img-fluid`} src={story3} alt="..." /></div>
                            <div className={styles.timelinePanel}>
                                <div className={styles.timelineHeading}>
                                    <h4>2020-2021</h4>
                                    <h4 className={styles.subheading}>Steady Growth</h4>
                                </div>
                                <div className={styles.timelineBody}><p className="text-muted">The second year saw steady progress. We expanded our faculty and diversified our course offerings. Student enrollments increased as word spread about our effective teaching methods.</p></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.timelineImage}><Image className=" rounded-circle img-fluid" src={story3} alt="..." /></div>
                            <div className={styles.timelinePanel}>
                                <div className={styles.timelineHeading}>
                                    <h4>2021-2022</h4>
                                    <h4 className={styles.subheading}>Building Momentum</h4>
                                </div>
                                <div className={styles.timelineBody}><p className="text-muted">Year three marked a turning point. We gained recognition for our results-driven approach. Our students achieved notable successes, fueling our reputation as a reliable coaching institute.</p></div>
                            </div>
                        </li>
                        <li className={styles.timelineInverted}>
                            <div className={styles.timelineImage}><Image className={` rounded-circle img-fluid`} src={story3} alt="..." /></div>
                            <div className={styles.timelinePanel}>
                                <div className={styles.timelineHeading}>
                                    <h4>2022-2023</h4>
                                    <h4 className={styles.subheading}>Rising Excellence</h4>
                                </div>
                                <div className={styles.timelineBody}><p className="text-muted">In our fourth year, we continued to rise. Our institute became synonymous with excellence. We invested in technology, enhanced our facilities, and forged stronger bonds with our students. Our journey towards academic brilliance continued to ascend.</p></div>
                            </div>
                        </li>


                    </ul>
                    <div className={`${styles.centerButton} d-flex justify-content-center`}>
                        <Link href="/gallery" className={`${styles.buttons}`}>Explore Gallery</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey