import React from "react";
import styles from "../styles/Cards.styles.module.scss";
import FacebookIcon from "../image/FacebookIcon";
import InstagramIcon from "../image/InstagramIcon";
import YouTubeIcon from "../image/YouTubeIcon";
import TwitterIcon from "../image/TwitterIcon";
import WomenHealth from "../image/WomenHealth.png";
import SkinCare from "../image/SkinCare.png";
import HairCare from "../image/HairCare.png";
import Immunity from "../image/Immunity.png";
import instituteIcon from "../image/InstituteIcon.png";
import CustomerImage from "../image/CustomerImage.png";
import stars from "../image/starsImage.png";
import calendarIcon from "../image/calendarIcon.png";
import leftArrow from "../image/DA.png";
import TickMark from "../image/tickMark.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.twoColumns}>
        <div className={styles.firstCol}>
          <div className={styles.firstCard}>
            <div className={styles.top}>
              <div className={styles.text}>A Little About me</div>
              <div className={styles.btn}>
                <button>
                  Follow <span className={styles.plus}>+</span>
                </button>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                Surat. love to work with all my hospital staff and seniour
                doctors. Completed my graduation in Gynaecologist Medicine from
                the
                <div className={styles.lineContainer}>
                  <hr />
                  <span
                    style={{ fontWeight: 500, textDecoration: "underline" }}
                  >
                    Read more
                  </span>
                </div>
              </div>
              <div className={styles.languages}>
                <div className={styles.langText}>Languages Spoken</div>
                <div className={styles.lang}>English</div>
                <div className={styles.lang}>Hindi</div>
                <div className={styles.lang}>Telugu</div>
              </div>
              <div className={styles.icons}>
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className={styles.secondCard}>
            <div className={styles.top}>
              <div className={styles.text}>I Specialize In</div>
            </div>
            <div className={styles.content}>
              <div className={styles.icons}>
                <div className={styles.first}>
                  <div className={styles.icon}>
                    <img src={WomenHealth} alt="n/a" />
                  </div>
                  <div className={styles.text}>Women's Health</div>
                </div>
                <div className={styles.second}>
                  <div className={styles.icon}>
                    <img src={SkinCare} alt="n/a" />
                  </div>
                  <div className={styles.text}>Skin Care</div>
                </div>
                <div className={styles.third}>
                  <div className={styles.icon}>
                    <img src={Immunity} alt="n/a" />
                  </div>
                  <div className={styles.text}>Immunity</div>
                </div>
                <div className={styles.fourth}>
                  <div className={styles.icon}>
                    <img src={HairCare} alt="n/a" />
                  </div>
                  <div className={styles.text}>Hair Care</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdCard}>
            <div className={styles.top}>
              <div className={styles.text}>The Concerns I Treat</div>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <div className={styles.firstRow}>
                  <div className={styles.box}>Skin Treatment</div>
                  <div className={styles.box}>Pregnancy</div>
                  <div className={styles.box}>Period Doubts</div>
                  <div className={styles.box}>Endometriosis</div>
                </div>
                <div className={styles.secondRow}>
                  <div className={styles.box}>Pelvic Pain</div>
                  <div className={styles.box}>Ovarian Cysts</div>
                  <div className={styles.separate}>+ 5 More</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fourthCard}>
            <div className={styles.top}>
              <div className={styles.text}>My Work Experience</div>
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
                <div className={styles.lineContainer}>
                  <hr />
                </div>
              </div>
              <div className={styles.workEx}>
                <div className={styles.first}>
                  <div className={styles.exp}>
                    <div className={styles.icon}>
                      <img src={instituteIcon} alt="n/a" />
                    </div>
                    <div className={styles.details}>
                      <div className={styles.institue}>
                        Midtown Medical Clinic
                      </div>
                      <div className={styles.post}>Senior doctor</div>
                    </div>
                  </div>
                  <div className={styles.tenure}>2016-PRESENT</div>
                </div>
                <div className={styles.second}>
                  <div className={styles.exp}>
                    <div className={styles.icon}>
                      <img src={instituteIcon} alt="n/a" />
                    </div>
                    <div className={styles.details}>
                      <div className={styles.institue}>
                        Midtown Medical Clinic
                      </div>
                      <div className={styles.post}>Senior doctor</div>
                    </div>
                  </div>
                  <div className={styles.tenure}>2010-2015</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fifthCard}>
            <div className={styles.top}>
              <div className={styles.text}>Featured Reviews (102)</div>
            </div>
            <div className={styles.content}>
              <div className={styles.card1}>
                <div className={styles.details}>
                  <div className={styles.customer}>
                    <div className={styles.image}>
                      <img src={CustomerImage} alt="n/a" />
                    </div>
                    <div className={styles.others}>
                      <div className={styles.name}>Alicent Hightower</div>
                      <div className={styles.consultedFor}>
                        Consulted For Skin care
                      </div>
                    </div>
                  </div>
                  <div className="date">20 January 2023</div>
                </div>
                <div className={styles.review}>
                  <div className="stars">
                    <img src={stars} alt="n/a" />
                  </div>
                  <div className={styles.description}>
                    Might be bit early to confirm but yes I can see noticeable
                    difference in my hairfall. will write again after using it
                    for longer periods
                  </div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.details}>
                  <div className={styles.customer}>
                    <div className={styles.image}>
                      <img src={CustomerImage} alt="n/a" />
                    </div>
                    <div className={styles.others}>
                      <div className={styles.name}>Alicent Hightower</div>
                      <div className={styles.consultedFor}>
                        Consulted For Pregnancy
                      </div>
                    </div>
                  </div>
                  <div className="date">20 January 2023</div>
                </div>
                <div className={styles.review}>
                  <div className="stars">
                    <img src={stars} alt="n/a" />
                  </div>
                  <div className={styles.description}>
                    Might be bit early to confirm but yes I can see noticeable
                    difference. will write again after using it for longer
                    periods
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondCol}>
          <div className={styles.appointment}>
            <div className={styles.text}>Appointment Fee</div>
            <div className={styles.amount}>&#8377;699.00</div>
          </div>
          <div className={styles.sessionMode}>
            <div className={styles.text}>Select your mode of session </div>
            <div className={styles.lineContainer}>
              <hr />
            </div>
          </div>
          <div className={styles.sessionCards}>
            <div className={styles.card1}>
              <div className={styles.type}>In-Clinic</div>
              <div className={styles.duration}>45 Mins</div>
            </div>
            <div className={styles.card2}>
              <div className={styles.type}>
                Video <img src={TickMark} alt="n/a"/>
              </div>
              <div className={styles.duration}>45 Mins</div>
            </div>
            <div className={styles.card3}>
              <div className={styles.type}>Chat</div>
              <div className={styles.duration}>10 Mins</div>
            </div>
          </div>
          <div className={styles.pickSlot}>
            <div className={styles.text}>Pick a time slot</div>
            <div className={styles.lineContainer2}>
              <hr />
            </div>
            <div className={styles.icon}>
              <img src={calendarIcon} alt="n/a" />
            </div>
          </div>
          <div className={styles.dateSlots}>
            <div className={styles.leftArrow}>
              {/* <img src={leftArrow} alt="n/a"/> */}
              <FaChevronLeft />
            </div>
            <div className={styles.cards}>
              <div className={styles.card1}>
                <div className={styles.date}>Mon, 10 Oct</div>
                <div className={styles.noOfSlots}>10 slots</div>
              </div>
              <div className={styles.card2}>
                <div className={styles.date}>Tue, 11 Oct</div>
                <div className={styles.noOfSlots}>02 slots</div>
              </div>
              <div className={styles.card3}>
                <div className={styles.date}>Wed, 12 Oct</div>
                <div className={styles.noOfSlots}>05 slots</div>
              </div>
            </div>
            <div className={styles.righttArrow}>
              <FaChevronRight />
            </div>
          </div>
          <div className={styles.morning}>
            <div className={styles.text}>Morning</div>
            <div className={styles.row}>
              <div className={styles.box}>09:00 AM</div>
              <div className={styles.box}>09:30 AM</div>
              <div className={styles.box}>10:00 AM</div>
              <div className={styles.box}>10:15 AM</div>
              <div className={styles.box}>10:45 AM</div>
              <div className={`${styles.box} ${styles.greenBg}`}>11:00 AM</div>
            </div>
          </div>
          <div className={styles.morning}>
            <div className={styles.text}>Evening</div>
            <div className={styles.row}>
              <div className={styles.box}>04:00 PM</div>
              <div className={styles.box}>04:15 PM</div>
              <div className={styles.box}>04:30 PM</div>
              <div className={styles.box}>04:45 PM</div>
              <div className={styles.box}>05:15PM</div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
