import React from 'react';
import image from '../../assets/icons/img.jpg';
import styles from './Mentor.module.scss';
import { User } from '../Request/Request';
import Button, { ButtonTypeEnum, ButtonStyle } from '../Button/Button';

const Mentor = (mentor: User) => {
  return (
    <li className={styles.card}>
      <div className={styles.head}>
        <img src={image} alt="profile picture" />
        <div className={styles.nameTitle}>
          <h3>{mentor.name}</h3>
          <h4>{mentor.title}</h4>
        </div>
      </div>
      <p className={styles.description}>{mentor.description}</p>
      <div className={styles.keywords}>
        {mentor.keywords.map((keyword) => (
          <small>#{keyword} </small>
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
