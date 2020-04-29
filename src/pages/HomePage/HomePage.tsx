import React from 'react';

import styles from './HomePage.scss';
import Container from '../../components/Container/Container';
import CustomLink from '../../components/CustomLink/CustomLink';

const HomePage = () => {
  return (
    <>
      <div className={styles.banner}></div>
      <Container>
        <h1>Welcome to Mentoring For Women!</h1>
        <p>
          Mentoring for women is here to connect women in the tech industry and
          females looking to join or learn about it.
        </p>
        <h3>It's simple...</h3>
        <p>
          You will need to register and tell us about yourself in a simple form.
          Then you can look for mentors available, send them a connection
          request and start emailing!
        </p>
        <CustomLink to="/sign-up">Sign Up!</CustomLink>
        <p>Join our community</p>
      </Container>
    </>
  );
};

export default HomePage;
