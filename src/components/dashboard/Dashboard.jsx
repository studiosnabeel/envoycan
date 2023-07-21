import { Link } from 'react-router-dom';
import styles from './dash.module.css';

const Dashboard = () => {
  return (
    <section className={styles.dashboardSection}>
      {/* Nav Section */}
      <nav className={styles.navbar}>
        <div className={styles.upContainer}>
          <p className={styles.para}>pages/dashboard</p>
          <h3 className={styles.heading}>Dashboard</h3>
        </div>

        <div className={styles.lowerContainer}>
          <div className={styles.bar}>
            <img src="../../../public/search1.png" alt="img" />
            <input
              className={styles.input}
              type="text"
              placeholder="search here.."
            />
          </div>
          <div className={styles.signinContainer}>
            <img src="../../../public/person.png" alt="img" />
            <Link to="/login" className={styles.signin}>
              Sign In
            </Link>
          </div>
          <div className={styles.lastContainer}>
            <Link>
              <img src="../../../public/settings.png" alt="img" />
            </Link>
            <Link>
              <img src="../../../public/bell.png" alt="img" />
            </Link>
          </div>
        </div>
      </nav>

      {/* cards section */}

      <div className={styles.cardContainer}>
        <div className={styles.subCardContainer}>
          <div className={styles.subSubContainer}>
            <div className={styles.cards}>
              <div className={styles.text}>
                <div className={styles.headingGroup}>
                  <h4 className={styles.h4}>TODAY'S MONEY</h4>
                  <h2 className={styles.h2}>$53,897</h2>
                </div>
                <div className={styles.secondheading}>
                  <h3 className={styles.h3}>+3.48%</h3>
                  <p className={styles.p}>Since last month</p>
                </div>
              </div>
              <div>
                <img src="../../../public/folder.png" alt="icon" />
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.text}>
                <div className={styles.headingGroup}>
                  <h4 className={styles.h4}>TODAY'S MONEY</h4>
                  <h2 className={styles.h2}>$53,897</h2>
                </div>
                <div className={styles.secondheading}>
                  <h3 className={styles.h3}>+3.48%</h3>
                  <p className={styles.p}>Since last month</p>
                </div>
              </div>
              <div>
                <img src="../../../public/globe.png" alt="icon" />
              </div>
            </div>
          </div>
          <div className={styles.subSubContainer}>
            <div className={styles.cards}>
              <div className={styles.text}>
                <div className={styles.headingGroup}>
                  <h4 className={styles.h4}>TODAY'S MONEY</h4>
                  <h2 className={styles.h2}>$53,897</h2>
                </div>
                <div className={styles.secondheading}>
                  <h3 className={styles.h3}>+3.48%</h3>
                  <p className={styles.p}>Since last month</p>
                </div>
              </div>
              <div>
                <img src="../../../public/paper.png" alt="icon" />
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.text}>
                <div className={styles.headingGroup}>
                  <h4 className={styles.h4}>TODAY'S MONEY</h4>
                  <h2 className={styles.h2}>$53,897</h2>
                </div>
                <div className={styles.secondheading}>
                  <h3 className={styles.h3}>+3.48%</h3>
                  <p className={styles.p}>Since last month</p>
                </div>
              </div>
              <div>
                <img src="../../../public/cart.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* graphs section */}

      <div className={styles.graphContainer}>
        <div className={styles.subGraphContainer}>
          <div className={styles.subSubGraphContainer}>
            <div className={styles.graphsdivGroup1}>
              <img
                className={styles.graphImage}
                src="../../../public/salesoverview.png"
                alt="salesOverview"
              />
            </div>
            <div className={styles.graphsdivGroup2}>
              <img
                className={styles.graphImage}
                src="../../../public/orders.png"
                alt="orders"
              />
            </div>
          </div>
        </div>
        <div className={styles.subGraphContainer}>
          <div className={styles.subSubGraphContainer}>
            <div className={styles.graphsdivGroup1}>
              <img
                className={styles.graphImage}
                src="../../../public/pagevisits.png"
                alt="pageVisits"
              />
            </div>
            <div className={styles.graphsdivGroup2}>
              <img
                className={styles.graphImage}
                src="../../../public/socialtraffic.png"
                alt="socialTraffic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
