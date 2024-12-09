import React from 'react';
import styles from './Background.module.css';

const Background: React.FC = () => {
  return (
    <div className={styles.backgroundContainer}>
      {/* Optional overlay for better readability */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>PUBG Analytics</h1>
        <p>Upload and analyze your match data seamlessly</p>
      </div>
    </div>
  );
};

export default Background;
