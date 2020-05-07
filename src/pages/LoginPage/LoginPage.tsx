import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../img/logo.jpg';
import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error,
} from '../components/AuthForms';
import { useAuth } from '../context/auth';

// TODO: this is an example for auth from https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
// that solution has an issue with auth.ts and app.tsx but the logic is good

const LoginPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post('https://www.somePlace.com/auth/login', {
        userName,
        password,
      })
      .then((result: any) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e: any) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </Card>
  );
};

export default LoginPage;
