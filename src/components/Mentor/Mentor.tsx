import React from 'react';
import image from '../../assets/icons/foto.jpg';
import styles from './Mentor.module.scss';
import { User } from '../Request/Request';

const Mentor = (mentor: User) => {
  return (
    <li className={styles.card}>
      <img src={image} alt="profile picture" />
      <h3>{mentor.name}</h3>
      <h4>{mentor.title}</h4>
      <p>{mentor.description}</p>
      <div className={styles.keywords}>
        {mentor.keywords.map((keyword) => (
          <small>#{keyword} </small>
        ))}
      </div>
    </li>
  );
};

export default Mentor;
