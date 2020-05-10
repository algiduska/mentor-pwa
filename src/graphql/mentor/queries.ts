import gql from 'graphql-tag';

export interface IMentor {
  _id: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  profileImage: any;
  email: string;
}

//   export interface IGetMentorResponse {
//     mentor: IMentor;
//   }

export interface IGetAllMentorsResponse {
  allMentors: IMentor[];
}

export const GET_MENTOR = gql`
  query Mentor($id: ID!) {
    mentor(_id: $id) {
      _id
      name
      title
      description
      keywords
      email
      profileImage
    }
  }
`;

export const GET_ALL_MENTORS = gql`
  query AllMentors {
    allMentors {
      _id
      name
      title
      description
      keywords
      email
      profileImage
    }
  }
`;

export default {
  GET_MENTOR,
  GET_ALL_MENTORS,
};
