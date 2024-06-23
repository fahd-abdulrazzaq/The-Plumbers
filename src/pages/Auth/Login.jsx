import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import app from '../../auth/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/dashboard');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };
  return (
    <section className=' bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% flex lg:flex lg:justify-between lg:items-center justify-center items-center pb-10'>
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center mx-auto'>
        <div className='mx-auto w-[20rem] mb-3 font-bold text-2xl lg:text-3xl text-center'>
          <h1 className='text-blue'>
            {' '}
            <span className='mr-2'>
              <ion-icon name='desktop'></ion-icon>
            </span>
            Sigma Learning Platform
          </h1>
        </div>
        <div className='bg-blue p-5 rounded-md md:p-10 flex flex-col items-center'>
          <form className='flex flex-col' onSubmit={handleLogin}>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='email' className='text-md mb-1 text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className=' invalid:text-red-400 border-none outline-none p-1 w-80 bg-white'
                placeholder='enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='password' className='text-md mb-1 text-white'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='border-none outline-none  p-1 w-80 bg-white'
                placeholder='enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='bg-white text-center mt-10 rounded-md p-1 text-blue text-lg hover:bg-slate-950 hover:text-white hover:transition hover:duration-200'>
              <button>Login</button>
            </div>
          </form>

          <p className='mt-4 text-white'>
            don&apos;t have an account?{' '}
            <Link className='text-blue bg-slate-400 p-2' to='/signup'>
              signup
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
