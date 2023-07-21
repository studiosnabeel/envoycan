import styles from './page.module.css';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default PageContent;
