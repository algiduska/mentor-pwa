import React from 'react';

export interface User {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  profileImage: any;
  email: string;
  isMentor: boolean;
}

interface Request {
  sent: boolean;
  accepted: boolean;
  user: User;
}
const Request = () => {
  const request = {
    sent: true,
  };
  return <div></div>;
};

export default Request;
