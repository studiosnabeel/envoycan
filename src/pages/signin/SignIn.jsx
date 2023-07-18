import styles from './signin.module.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navFolder}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Link className={styles.link}>Dashboard</Link>
            <Link className={styles.link}>Profile</Link>
            <Link className={styles.link}>Signin</Link>
            <Link className={styles.link}>Signup</Link>
          </nav>
          <button>SignUp</button>
        </div>
      </div>

    <div className={styles.signInContainer}>
      <h2>Sign in with</h2>
      <div>
        
      </div>
    </div>

      <footer className={styles.footer}>
        <a href="">Blog</a>
        <a href="">Licence</a>
      </footer>
    </section>
  );
};

export default SignIn;
