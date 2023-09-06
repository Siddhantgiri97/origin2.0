import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

library.add(faBookOpenReader);
import styles from '@/styles/Home.module.css'

const ExploreCourses = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-3 justify-content-center">
                        <div className="col-xxl-12">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Unlock your Potential</span></h2>
                                <p className="lead fw-light mb-4">Embark on your journey to success with us.</p>
                                <p className="text-muted">We&apos;re committed to shaping your future. We understand that the journey to cracking JEE Main, JEE Advanced, and MHT-CET can be challenging, but it&apos;s also incredibly rewarding. That&apos;s why we&apos;ve designed courses that not only simplify complex subjects but also ignite a passion for learning.</p>
                                <div className={styles.section_our_solution}>
                                    <div className="row pt-5">
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div className={styles.our_solution_category}>
                                                <div className={styles.solution_cards_box}>
                                                    <div className={`${styles.solution_card}`}>
                                                        <div className={`${styles.so_top_icon} text-center pt-4`}>
                                                            <FontAwesomeIcon icon={faBookOpenReader} className={styles.fontIcon} />
                                                        </div>
                                                        <div className={styles.solu_title}>
                                                            <div>IIT-JEE</div>
                                                        </div>
                                                        <div className={styles.solu_description}>
                                                            <p>
                                                                It is a long established fact that a reader will be distracted by the readable
                                                                content of a page when looking at its layout.
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div className={styles.our_solution_category}>
                                                <div className={styles.solution_cards_box}>
                                                    <div className={styles.solution_card}>

                                                        <div className={`${styles.so_top_icon} text-center pt-4`}>
                                                            <FontAwesomeIcon icon={faBookOpenReader} className={styles.fontIcon} />
                                                        </div>
                                                        <div className={styles.solu_title}>
                                                            <div>MHT-CET</div>
                                                        </div>
                                                        <div className={styles.solu_description}>
                                                            <p>
                                                                It is a long established fact that a reader will be distracted by the readable
                                                                content of a page when looking at its layout.
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div className={styles.our_solution_category}>
                                                <div className={styles.solution_cards_box}>
                                                    <div className={styles.solution_card}>

                                                        <div className={`${styles.so_top_icon} text-center pt-4`}>
                                                            <FontAwesomeIcon icon={faBookOpenReader} className={styles.fontIcon} />
                                                        </div>
                                                        <div className={styles.solu_title}>
                                                            <div>NEET</div>
                                                        </div>
                                                        <div className={styles.solu_description}>
                                                            <p>
                                                                It is a long established fact that a reader will be distracted by the readable
                                                                content of a page when looking at its layout.
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={` mt-5 pt-3`}>
                                    <Link href="/courses" className={`${styles.buttons}`}>Explore Courses</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreCourses