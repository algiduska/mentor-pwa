import React from 'react';
import image from '../../assets/icons/img.jpg';
import styles from './Mentor.module.scss';
import Button, { ButtonTypeEnum, ButtonStyle } from '../Button/Button';
import { IMentor } from '../../graphql/mentor/queries';

const Mentor = (mentor: IMentor) => {
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
          <span key={keyword}>#{keyword} </span>
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
