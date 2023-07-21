import PageContent from '../pagecontent/PageContent';
import SideMenu from '../sidemenu/SideMenu';
import styles from './h.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <SideMenu className={styles.side} />
        <PageContent />
      </div>
    </div>
  );
};

export default Home;
