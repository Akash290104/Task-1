import React from "react";
import styles from "../styles/Last.styles.module.scss";
import { FiX } from "react-icons/fi";
import DoctorImage from "../images/DoctorImage.png";
import star from "../images/material-symbols_star.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";

const Last = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.box}>
          Hair care
          <FiX />
        </div>
        <div className={styles.box}>
          Female <FiX />
        </div>
        <div className={styles.box}>
          Rs.0-Rs.500 <FiX />
        </div>
        <div className={styles.box}>
          Hindi <FiX />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.doctors}>
          <div className={styles.details}>
            <div className={styles.first}>
              <div className={styles.photo}>
                <img src={DoctorImage} alt="n/a" />
              </div>
              <div className={styles.rating}>
                4.5 <img src={star} />
              </div>
            </div>
            <div className={styles.name}>Dr. Prerna Narang</div>
            <div className={styles.others}>
              <div className={styles.speciality}>
                <img src={one} />
                Male-Female Infertility
              </div>
              <div className={styles.experience}>
                <img src={two} />7 years of Experience
              </div>
              <div className={styles.language}>
                <img src={three} />
                Speaks: English, Hindi, Marathi
              </div>
            </div>
            <div className={styles.consult}>
              <div className={styles.video}>
                <div className={styles.text}>Video Consultation</div>
                <div className={styles.amount}>&#8377;
                800</div>
              </div>
              <div className={styles.chat}>
              <div className={styles.text}>Chat Consultation</div>
              <div className={styles.amount}>Free</div>
              </div>
            </div>
            <button className={styles.profile}>View Profile</button>
            <button className={styles.book}>Book a Consultation</button>
          </div>
        </div>
        <div className={styles.doctors}>
          <div className={styles.details}>
            <div className={styles.first}>
              <div className={styles.photo}>
                <img src={DoctorImage} alt="n/a" />
              </div>
              <div className={styles.rating}>
                4.5 <img src={star} />
              </div>
            </div>
            <div className={styles.name}>Dr. Prerna Narang</div>
            <div className={styles.others}>
              <div className={styles.speciality}>
                <img src={one} />
                Male-Female Infertility
              </div>
              <div className={styles.experience}>
                <img src={two} />7 years of Experience
              </div>
              <div className={styles.language}>
                <img src={three} />
                Speaks: English, Hindi, Marathi
              </div>
            </div>
            <div className={styles.consult}>
              <div className={styles.video}>
                <div className={styles.text}>Video Consultation</div>
                <div className={styles.amount}>&#8377;
                800</div>
              </div>
              <div className={styles.chat}>
              <div className={styles.text}>Chat Consultation</div>
              <div className={styles.amount}>Free</div>
              </div>
            </div>
            <button className={styles.profile}>View Profile</button>
            <button className={styles.book}>Book a Consultation</button>
          </div>
        </div>
        <div className={styles.doctors}>
          <div className={styles.details}>
            <div className={styles.first}>
              <div className={styles.photo}>
                <img src={DoctorImage} alt="n/a" />
              </div>
              <div className={styles.rating}>
                4.5 <img src={star} />
              </div>
            </div>
            <div className={styles.name}>Dr. Prerna Narang</div>
            <div className={styles.others}>
              <div className={styles.speciality}>
                <img src={one} />
                Male-Female Infertility
              </div>
              <div className={styles.experience}>
                <img src={two} />7 years of Experience
              </div>
              <div className={styles.language}>
                <img src={three} />
                Speaks: English, Hindi, Marathi
              </div>
            </div>
            <div className={styles.consult}>
              <div className={styles.video}>
                <div className={styles.text}>Video Consultation</div>
                <div className={styles.amount}>&#8377;
                800</div>
              </div>
              <div className={styles.chat}>
              <div className={styles.text}>Chat Consultation</div>
              <div className={styles.amount}>Free</div>
              </div>
            </div>
            <button className={styles.profile}>View Profile</button>
            <button className={styles.book}>Book a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
