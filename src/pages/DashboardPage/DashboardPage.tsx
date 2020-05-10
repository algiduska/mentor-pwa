import React from 'react';
import Mentor from '../../components/Mentor/Mentor';
import Container from '../../components/Container/Container';
import styles from './DashboardPage.module.scss';
import {
  IMentor,
  IGetAllMentorsResponse,
  GET_ALL_MENTORS,
} from '../../graphql/mentor/queries';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

const DashboardPage = () => {
  const { loading, data, error } = useQuery<IGetAllMentorsResponse>(
    GET_ALL_MENTORS,
    {
      errorPolicy: 'all',
    }
  );

  console.log(data, error);

  const hasErrorAndNoData = error && !(data && data.allMentors);
  const noErrorAndNoData = !error && !(data && data.allMentors);

  if (!loading && (hasErrorAndNoData || noErrorAndNoData))
    return (
      <Redirect
        to={{
          pathname: '/error/404',
        }}
      />
    );

  return (
    <Container>
      <h1 className="sr-only">
        This is your dashboard where you can find or list current mentors
      </h1>
      <h2>Mentors</h2>
      <ul className={styles.wrapper}>
        {data &&
          data.allMentors.map((mentor: IMentor) => (
            <Mentor {...mentor} key={mentor.email} />
          ))}
      </ul>
    </Container>
  );
};

export default DashboardPage;
