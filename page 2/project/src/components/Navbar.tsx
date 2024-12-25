import styles from "../styles/Navbar.styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.first}>A M R U T A M</div>
        <div className={styles.links}>
          <div>Home</div>
          <div>Find Doctors</div>
          <div>About Us</div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.login}>
            <button>Login</button>
          </div>
          <div className={styles.signup}>
            <button>Sign-Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
