import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Style from './LoginAndSignUp.module.css';

const registerSchema = yup.object().shape({
  username: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});

const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

const login = () => {
  const [pageType, setPageType] = useState('login');
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const register = async (values, onSubmitProps) => {
    if (!name || !password || !email) return;

    await fetch('http://localhost:8000/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    setName('');
    setEmail('');
    setPassword('');
    setPageType('login');
  };

  const login = async (values, onSubmitProps) => {
    if (!password || !email) return;

    const loggedInUserResponse = await fetch(
      'http://localhost:8000/api/v1/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const loggedIn = await loggedInUserResponse.json();

    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>{pageType === 'login' ? 'Welcome Back!' : 'Create an Account!'}</h1>
        <div className={Style.user}>
          <div className={Style.user_box}>
            <div className={Style.user_box_input}>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={
                  isLogin ? initialValuesLogin : initialValuesRegister
                }
                validationSchema={isLogin ? loginSchema : registerSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  resetForm,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {isRegister && (
                      <div className={Style.user_box_input_box}>
                        <label htmlFor='name'>Name</label>
                        <input
                          type='text'
                          placeholder='Name'
                          onBlur={handleBlur}
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          name='name'
                        />
                      </div>
                    )}
                    <div className={Style.user_box_input_box}>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        type='text'
                        placeholder='Email'
                        onBlur={handleBlur}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        name='email'
                      />
                    </div>
                    <div className={Style.user_box_input_box}>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        placeholder='Password'
                        onBlur={handleBlur}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name='password'
                      />
                    </div>
                    <div className={Style.button_box}>
                      <button onClick={handleFormSubmit} type='submit'>
                        {isLogin ? 'Login' : 'Register'}
                      </button>
                    </div>

                    <p
                      onClick={() => {
                        setPageType(isLogin ? 'register' : 'login');
                        resetForm();
                      }}
                      className={Style.login_box_para}
                    >
                      {isLogin
                        ? "Don't have an account? Sign Up here."
                        : 'Already have an account? Login here.'}
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
