import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Button } from '../../components';
import { ErrorAlert } from '../../components/Alerts';
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  MessageIcon,
  UserIcon,
} from '../../components/icons';

const SignUp: NextPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMasked, setIsMasked] = useState(true);
  const [code, setCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState();
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { name, value } = target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'code':
        setCode(value);
        break;
    }
  };

  const isValidUsername = (): boolean => {
    if (username.length < 3 || username.length > 30) {
      setErrorMessage('usernameは3文字以上, 30文字以下にしてください。');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const isValidPassword = (): boolean => {
    const regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
    if (!regexPassword.test(password)) {
      setErrorMessage('passwordには大文字・小文字の英字と数字を含めてください。');
      return false;
    } else if (password.length < 12 || password.length > 50) {
      setErrorMessage('passwordは12文字以上, 50文字以下にしてください。');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const signUp = async (): Promise<void> => {
    try {
      if (isValidUsername() && isValidPassword()) {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        setIsError(false);
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      switch (error.name) {
        case 'UsernameExistsException':
          setErrorMessage('すでに登録済みのユーザー名のため使えません。');
          break;
        default:
          setErrorMessage(`${error}`);
          break;
      }

      setIsError(true);
    }
  };

  const confirmSignUp = async (): Promise<void> => {
    try {
      await Auth.confirmSignUp(username, code);
      await Auth.signIn({ username, password });
      router.push('/user-profile');
    } catch (error) {
      setErrorMessage(`${error}`);
      setIsError(true);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        console.log(error);
      }
    };
    init();

    if (user) {
      router.push('/user-profile');
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSubmitted ? (
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
          <div className='form-control'>
            <div className='mb-10'>
              <a onClick={()=>setIsSubmitted(false)}>
                <ArrowLeftIcon classes='h-5 w-5' />
              </a>
            </div>
            <div className='m-1 p-2'>
              <div className='flex border-b border-primary'>
                <label className='label'>
                  <UserIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='username'
                  type='text'
                  placeholder='username'
                  className='bg-white ml-1 p-2'
                  value={username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='m-1 p-2'>
              <div className='flex border-b border-primary'>
                <label className='label'>
                  <MessageIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='code'
                  type='text'
                  placeholder='verification code'
                  className='bg-white ml-1 p-2'
                  value={code}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className='mt-5 mx-auto'>
            <Button size='large' label='activate account' onClick={confirmSignUp} />
          </div>
        </div>
      ) : (
        <>
          <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
            <div className='form-control'>
              <div className='mb-20'>
                <Link href='/'>
                  <a>
                    <ArrowLeftIcon classes='h-5 w-5' />
                  </a>
                </Link>
              </div>
              <div className='m-1 p-2'>
                <div className='flex border-b border-primary'>
                  <label className='label'>
                    <UserIcon classes='h-6 w-6 text-primary' />
                  </label>
                  <input
                    name='username'
                    type='text'
                    placeholder='username'
                    className='bg-white ml-1 p-2'
                    value={username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='m-1 p-2'>
                <div className='flex border-b border-primary'>
                  <label className='label'>
                    <MailIcon classes='h-6 w-6 text-primary' />
                  </label>
                  <input
                    name='email'
                    type='email'
                    placeholder='user@email.com'
                    className='bg-white ml-1 p-2'
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='m-1 p-2'>
                <div className='flex border-b border-primary'>
                  <label className='label'>
                    <LockIcon classes='h-6 w-6 text-primary' />
                  </label>
                  <input
                    name='password'
                    type={isMasked ? 'password' : 'text'}
                    placeholder='password'
                    className='bg-white ml-1 p-2'
                    value={password}
                    onChange={handleInputChange}
                  />
                  {isMasked ? (
                    <div onClick={() => setIsMasked(false)}>
                      <EyeOffIcon classes='m-2 text-secondary' />
                    </div>
                  ) : (
                    <div onClick={() => setIsMasked(true)}>
                      <EyeIcon classes='m-2' />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-5 mx-auto'>
              <Button size='large' label='create user' onClick={signUp} />
            </div>
            <div className='mt-10'>
              Active your account? <a className='text-secondary' onClick={()=>setIsSubmitted(true)}>Activate account</a>
            </div>
          </div>
          <div className='mt-10 text-center'>
            <p>Already have an account?</p>
            <div className='mt-2'>
              <Link href='/auth/sign-in'>
                <a>
                  <Button btnColor='btn-secondary' size='medium' label='sign in' />
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;