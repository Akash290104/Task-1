import styles from "../styles/Appointment.styles.module.scss";
import TickIcon from "../image/tickton";
import imageSrc from "../image/doctor.png";
import StarIcon from "../image/star";

const Appointemnt = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}></div>
      <div className={styles.details}>
      <div className={styles.image}>
        <img src={imageSrc} alt="Doctor" />
      </div>
      <div className={styles.credentials}>
        <div className={styles.name}>
          <div>Dr Bruce Willis</div>
          <TickIcon />
        </div>
        <div className={styles.specialization}>Gynecologist</div>
        <div className={styles.rating}><span>4.2</span>
          <div className={styles.stars}>
            {[...Array(4)].map((_, index) => (
              <StarIcon key={index} size={16} />
            ))}
          </div></div>
      </div>
      <div className={styles.doctorDetails}>
        <div className={styles.followers}>
        <div className={styles.text}>
        Followers
          </div>
          <div className={styles.number}>
            850
          </div>
        </div>

        <div className={styles.following}>
        <div className={styles.text}>
            Following
          </div>
          <div className={styles.number}>
            18K
          </div>
        </div>
 
        <div className={styles.posts}>
          <div className={styles.text}>
            Posts
          </div>
          <div className={styles.number}>
            250
          </div>
        </div>
      </div>
      <div className={styles.bookAppt}>
        <button>Book an Appointment</button>
      </div>
      </div>
      
    </div>
  );
};

export default Appointemnt;
