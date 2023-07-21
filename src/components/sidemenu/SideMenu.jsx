import { Link } from 'react-router-dom';
import styles from './sidemenu.module.css';

const SideMenu = () => {
  return (
    <section className={styles.container}>
      <div className={styles.upContainer}>
        <div>
          <img className={styles.companyLogo} src="../../../public/logo.png" alt="Company logo" />
        </div>
        <div className={styles.menu}>
          <img
            className={styles.pic}
            src="../../../public/home.png"
            alt="icon"
          />
          <Link to="/pagecontent/dashboard" className={styles.links}>
            Dashboard
          </Link>
        </div>
        <div className={styles.menu}>
          <img
            className={styles.pic}
            src="../../../public/card.png"
            alt="icon"
          />
          <Link to="/pagecontent/billing" className={styles.links}>
            Billing
          </Link>
        </div>
        <h4>Account Pages</h4>
        <div className={styles.menu}>
          <img
            className={styles.pic}
            src="../../../public/doc.png"
            alt="icon"
          />
          <Link to="/login" className={styles.links}>
            Sign In
          </Link>
        </div>
        <div className={styles.menu}>
          <img
            className={styles.pic}
            src="../../../public/rocket.png"
            alt="icon"
          />
          <Link to="/register" className={styles.links}>
            Sign Up
          </Link>
        </div>
      </div>
      <div className={styles.downContainer}>
        <div className={styles.folderImageContainer}>
          <img className={styles.folderImage} src="../../../public/docs.svg" alt="documents picture" />
        </div>
        <div>
          <h3>Need help?</h3>
          <p>Please check our docs</p>
        </div>
        <button className={styles.btn1}>DOCUMENTATION</button>
        <button className={styles.btn2}>UPGRADE TO PRO</button>
      </div>
    </section>
  );
};

export default SideMenu;
