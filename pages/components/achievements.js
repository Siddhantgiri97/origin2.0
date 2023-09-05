import React from 'react'
import CarouselItem from './carouselItem'
import AmitSirImg from '../../public/Amit_sir1.png'
import ShriSirImg from '../../public/Shrikant_sir1.png'
import ShamSirImg from '../../public/shyamal_sir1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import styles from '@/styles/Home.module.css'

const Achievements = () => {
  return (
    <>
      <div className={styles.cars} id='srvce'>
        <div className={`text-center ${styles.heading}`}>
          <h2 className={`${styles.sectionHeading} text-uppercase`}>Accomplishments</h2>
          <h3 className={`${styles.sectionSubheading} text-muted`}>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <Carousel>
          <Carousel.Item>
            <section className={`${styles.pageSection} bg-light py-3`} id={styles.portfolio}>
              <div className="container">
                <div className="row">
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShamSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className={`${styles.pageSection} bg-light py-3`} id={styles.portfolio}>
              <div className="container">
                <div className="row">
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={ShriSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className={`${styles.pageSection} bg-light py-3`} id={styles.portfolio}>
              <div className="container">
                <div className="row">
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                  <CarouselItem studentImage={AmitSirImg} studentCollege={"MIT"} studentCity={"Pune"} />
                </div>
              </div>
            </section>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Achievements