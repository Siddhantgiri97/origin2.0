import React from 'react'
import Link from 'next/link'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

library.add(faBookOpenReader);
import styles from '@/styles/Home.module.css'
import CoursesCard from './coursesCard';

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
                                <CoursesCard />

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