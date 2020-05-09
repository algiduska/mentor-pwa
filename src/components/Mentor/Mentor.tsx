import React from 'react';
import image from '../../assets/icons/img.jpg';
import styles from './Mentor.module.scss';
import Button, { ButtonTypeEnum, ButtonStyle } from '../Button/Button';

export interface User {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  profileImage: any;
  email: string;
  isMentor: boolean;
}

const Mentor = (mentor: User) => {
  return (
    <li className={styles.card}>
      <div className={styles.head}>
        <img src={image} alt={mentor.name} />
        <div className={styles.nameTitle}>
          <h3>{mentor.name}</h3>
          <h4>{mentor.title}</h4>
        </div>
      </div>
      <p className={styles.description}>{mentor.description}</p>
      <div className={styles.keywords}>
        {mentor.keywords.map((keyword) => (
          <small key={keyword}>#{keyword} </small>
        ))}
      </div>
      <Button
        disabled={false}
        type={ButtonTypeEnum.Button}
        style={ButtonStyle.secondary}
      >
        Learn more
      </Button>
    </li>
  );
};

export default Mentor;
