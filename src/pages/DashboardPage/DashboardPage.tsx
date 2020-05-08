import React from 'react';
import Mentor from '../../components/Mentor/Mentor';
import Container from '../../components/Container/Container';
import styles from './DashboardPage.module.scss';
import { User } from '../../components/Request/Request';

const DashboardPage = () => {
  const mentors: User[] = [
    {
      name: 'Natalia Leitnerova',
      title: 'Product Developer',
      description:
        "Studied Bc Business and Marketing but realising it's not a right fit. After identifying tech industry as a potential place to be, did conversion masters and started a job right after the degree.",
      keywords: ['travel', 'hiking', 'skiing'],
      profileImage: null,
      email: 'nleitnerova@and.digital',
      isMentor: true,
    },
    {
      name: 'Luna Lovegood',
      title: 'UX Designer',
      description:
        "Studied Bc Business and Marketing but realising it's not a right fit. After identifying tech industry as a potential place to be, did conversion masters and started a job right after the degree.",
      keywords: ['travel', 'hiking', 'skiing'],
      profileImage: null,
      email: 'nleitnerova@and.digital',
      isMentor: true,
    },
    {
      name: 'Hermione Granger',
      title: 'Scrum Master',
      description:
        "Studied Bc Business and Marketing but realising it's not a right fit. After identifying tech industry as a potential place to be, did conversion masters and started a job right after the degree.",
      keywords: ['travel', 'hiking', 'skiing'],
      profileImage: null,
      email: 'nleitnerova@and.digital',
      isMentor: true,
    },
    {
      name: 'Tom Marvolo Riddle',
      title: 'Product Owner',
      description:
        "Studied Bc Business and Marketing but realising it's not a right fit. After identifying tech industry as a potential place to be, did conversion masters and started a job right after the degree.",
      keywords: ['travel', 'hiking', 'skiing'],
      profileImage: null,
      email: 'nleitnerova@and.digital',
      isMentor: true,
    },
    {
      name: 'Minerva McGonagall',
      title: 'Product Analyst',
      description:
        "Studied Bc Business and Marketing but realising it's not a right fit. After identifying tech industry as a potential place to be, did conversion masters and started a job right after the degree.",
      keywords: ['travel', 'hiking', 'skiing'],
      profileImage: null,
      email: 'nleitnerova@and.digital',
      isMentor: true,
    },
  ];
  return (
    <Container>
      <h1>
        This is your dashboard where you can find mentors and manage requests
      </h1>
      <h2>Requests</h2>

      <h2>Mentors Available</h2>
      <ul className={styles.wrapper}>
        {mentors.map((user: User) => (
          <Mentor {...user} />
        ))}
      </ul>
    </Container>
  );
};

export default DashboardPage;
