import gql from 'graphql-tag';
import { IMentor } from './queries';

export interface ICreateMentorResponse {
  createMentor: IMentor;
}

export const CREATE_MENTOR = gql`
  mutation CreateMentor(
    $name: String!
    $email: String!
    $description: String!
    $title: String!
    $keywords: [String]!
    $profileImage: String
  ) {
    createMentor(
      attributes: {
        name: $name
        email: $email
        description: $description
        title: $title
        keywords: $keywords
        profileImage: $profileImage
      }
    ) {
      id
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
  CREATE_MENTOR,
};
