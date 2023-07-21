import styles from './register.module.css';
import { Link } from 'react-router-dom';
import {
  KeyOutlined,
  UserOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

const Register = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navFolder}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>
              <div className={styles.navDash}>
                <DashboardOutlined />
                <h3>Dashboard</h3>
              </div>
            </Link>
            <Link to="/" className={styles.link}>
              <div className={styles.navDash}>
                <UserOutlined />
                <h3>Profile</h3>
              </div>
            </Link>
            <Link to="/login" className={styles.link}>
              <div className={styles.navDash}>
                <UserOutlined />
                <h3>Signin</h3>
              </div>
            </Link>
            <Link to="/register" className={styles.link}>
              <div className={styles.navDash}>
                <KeyOutlined />
                <h3>Signup</h3>
              </div>
            </Link>
          </nav>
          <Link to="/login" className={styles.btn}>
            Sign In
          </Link>
        </div>
      </div>

      <div className={styles.introText}>
        <h3>Welcome!</h3>
        <p>
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>

      <div className={styles.signInContainer}>
        <div className={styles.firstContainer}>
          <h3 className={styles.h2}>Sign in with</h3>
          <div className={styles.iconContainer}>
            <div className={styles.icons}>
              <img className={styles.icon} src="./facebook.svg" alt="fb logo" />
            </div>
            <div className={styles.icons}>
              <img className={styles.icon} src="./apple.svg" alt="fb logo" />
            </div>
            <div className={styles.icons}>
              <img className={styles.icon} src="./google.svg" alt="fb logo" />
            </div>
          </div>
          <p>or</p>
        </div>
        <form className={styles.form}>
          <div className={styles.credentials}>
            <label className={styles.label1}>Name</label>
            <input type="text" />
          </div>
          <div className={styles.credentials}>
            <label className={styles.label1}>Email</label>
            <input type="text" />
          </div>
          <div className={styles.credentials}>
            <label>Password</label>
            <input type="password" />
          </div>
          <div className={styles.toggle}>
            <img src="./toggle.png" alt="toggle icon" />
            <p>Remember me</p>
          </div>
          <button className={styles.blueBtn}>Sign up</button>
        </form>
        <div className={styles.signup}>
          <p className={styles.dont}>Dont have an account</p>
          <Link to="/login" className={styles.singUpText}>
            <h4>Sign in</h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;