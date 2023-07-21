import styles from './signin.module.css';
import { Link } from 'react-router-dom';
import {
  KeyOutlined,
  UserOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const SignIn = () => {
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <section className={styles.container}>
      <div className={styles.navFolder}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Link to="/pagecontent/dashboard" className={styles.link}>
              <div className={styles.navDash}>
                <DashboardOutlined />
                <h3>Dashboard</h3>
              </div>
            </Link>
            <Link to="/pagecontent/dashboard" className={styles.link}>
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
          <Link to="/register" className={styles.btn}>
            SignUp
          </Link>
        </div>
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
            <input
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className={styles.credentials}>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div className={styles.toggle}>
            <img src="./toggle.png" alt="toggle icon" />
            <p>Remember me</p>
          </div>
          <Link className={styles.linkBlueBtn} to="/pagecontent/dashboard">
            <button onClick={login} className={styles.blueBtn}>
              Sign in
            </button>
          </Link>
        </form>
        <div className={styles.signup}>
          <p className={styles.dont}>Dont have an account</p>
          <Link to="/register" className={styles.singUpText}>
            <h4>Sign up</h4>
          </Link>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.anchorContainer}>
          <a href="">Blog</a>
          <a href="">Licence</a>
        </div>
      </footer>
    </section>
  );
};

export default SignIn;
