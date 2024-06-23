import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import app, { db } from '../../auth/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  // login functionality
  const handleSignUp = async (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          firstName,
          lastName,
          profileImage,
        });
        navigate('/dashboard');
      }
      toast.success('User created successfully', {
        position: 'top-center',
        autoClose: 2000,
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setProfileImage(null);
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  // handling profile Image
  const handleProfileImage = ({ base64 }) => {
    setProfileImage(base64);
  };

  return (
    <section className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% flex lg:flex lg:justify-between lg:items-center justify-center items-center pb-10'>
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center mx-auto '>
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
          <form
            className='flex flex-col items-center justify-center'
            onSubmit={handleSignUp}
          >
            <div className='mb-3 flex flex-col'>
              <label htmlFor='firstname' className='text-md mb-1 text-white'>
                First name
              </label>
              <input
                type='firstname'
                id='firstname'
                className=' invalid:text-red-400 border-none outline-none p-1 w-60 md:w-80 bg-white'
                placeholder='enter your firstname'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='lastname' className='text-md mb-1 text-white'>
                Last name
              </label>
              <input
                type='lastname'
                id='lastname'
                className=' invalid:text-red-400 border-none outline-none p-1 w-60 md:w-80 bg-white'
                placeholder='enter your lastname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='email' className='text-md mb-1 text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='invalid:text-red-400 border-none outline-none  p-1 w-60 md:w-80 bg-white'
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
                className='border-none outline-none p-1 w-60 md:w-80 bg-white'
                placeholder='enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mt-2 w-60 md:w-80'>
              <FileBase64
                multiple={false}
                type='file'
                onDone={handleProfileImage}
              />
            </div>

            <div className='bg-white text-center mt-5 rounded-md p-1 text-blue text-lg hover:bg-slate-950 hover:text-white hover:transition hover:duration-200 w-60 md:w-80'>
              <button>Sign Up</button>
            </div>
          </form>

          <p className='mt-4 text-white'>
            have an account?{' '}
            <Link className='text-blue bg-slate-400 p-2' to='/login'>
              login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
