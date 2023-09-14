import React from 'react'
import Image from 'next/image'

import VirtiImg from '../../public/studentImages/virti.png'
import YashImg from '../../public/studentImages/yash.jpg'
import SnehaImg from '../../public/studentImages/sneha.jpg'
import ShamalImg from '../../public/studentImages/shamal.png'
import HarshImg from '../../public/studentImages/harsh.jpg'
import ManaliImg from '../../public/studentImages/manali.jpg'
import RudraImg from '../../public/studentImages/rudra.jpg'
import PrajwalImg from '../../public/studentImages/prajwal.jpg'
import MujImg from '../../public/studentImages/mujtaba.png'
import RamImg from '../../public/studentImages/ram.png'
import ShraddhaImg from '../../public/studentImages/shraddha.png'
import RahulImg from '../../public/studentImages/rahul.png'
import ShreyaImg from '../../public/studentImages/shreya.png'
import PavanJImg from '../../public/studentImages/pawanj.png'
import ManasImg from '../../public/studentImages/manas.png'
import PawanImg from '../../public/studentImages/pawan.png'
import DevyaniImg from '../../public/studentImages/devyani.png'
import PranavImg from '../../public/studentImages/pranav.png'


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
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={VirtiImg} alt="..." />

                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>IIT Bombay <span className="badge rounded-pill bg-primary">
                          AIR 273 | 222 Main</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Virti Mehta</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={YashImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Trichy <span className="badge rounded-pill bg-primary">
                          AIR 522</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Yash Sirsat</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={SnehaImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Warangal <span className="badge rounded-pill bg-primary">
                          Rank(MH) 24</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Sneha Buktare</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={ShamalImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>VNIT Nagpur <span className="badge rounded-pill bg-primary">
                          AIR 2698 | 5 (MH)</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Shamal Telangade</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={HarshImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Rourkela <span className="badge rounded-pill bg-primary">
                          Rank(MH) 27</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Harshal Nage</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={ManaliImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>VNIT Nagpur <span className="badge rounded-pill bg-primary">
                          State Rank 1089</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Manali Kulkarni</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className={`${styles.pageSection} bg-light py-3`} id={styles.portfolio}>
              <div className="container">
                <div className="row">

                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={RudraImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Jaipur</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Rudrayani Adichwal</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={PrajwalImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Bhopal</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Prajwal Naphade</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={RamImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Trichy</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Ram Sakarkar</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={ShraddhaImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Surat</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Shraddha Sidurkar</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={MujImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT A.P</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Mujtaba Ansari</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={ShreyaImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT Nagpur</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Shreya Dhote</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className={`${styles.pageSection} bg-light py-3`} id={styles.portfolio}>
              <div className="container">
                <div className="row">

                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={RahulImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>NIT A.P</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Rahul Madhwani</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={PavanJImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>COEP Pune</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Pawan Jadhao</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={ManasImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>PICT Pune</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Manas Rathi</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={PawanImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>DJ Sanghvi Mumbai <span className="badge rounded-pill bg-primary">
                          Rank(MH): 137</span></div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Pawan Jadhao</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={DevyaniImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>VIT Pune</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Devyani Thokal</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className={styles.portfolioItem}>
                      <Image className="img-fluid" src={PranavImg} alt="..." />
                      <div className={`${styles.portfoliocaption} shadow`} >
                        <div className={styles.portfoliocaptionheading}>VIT Pune</div>
                        <div className={`${styles.portfoliocaptionsubheading} text-muted`}>Pranav Mahajan</div>
                      </div>
                    </div>
                  </div>

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