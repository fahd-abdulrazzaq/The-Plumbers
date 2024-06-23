/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { UserContext } from '../contexts/UserContext';
import { IoLogOutOutline } from 'react-icons/io5';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import app, { db } from '../auth/auth';
import { toast } from 'react-toastify';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // handle scroll function
  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      if (offSet > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log('user did not logged in');
      }
    });
  }, []);

  // handle logout

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      auth.signOut();
      toast.success('User logout successfully', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/');
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        sticky
          ? 'shadow bg-base-100 transition-all ease-in-out duration-300'
          : ''
      }`}
    >
      <div className={`navbar container`}>
        <div className='navbar-start align-middle'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a href='/courses'>Courses</a>
              </li>
              <li>
                <a>Menu</a>
                <ul className='p-2'>
                  <li>
                    <a href='/courses'>Start Learning</a>
                  </li>
                  <li>
                    <a href='/create-course'>Create Course</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
          <a href='/' className='btn btn-ghost text-blue text-xl'>
            Sigma
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='/courses'>Courses</a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className='p-2'>
                  <li>
                    <a href='/courses'>Start Learning</a>
                  </li>
                  <li>
                    <a href='/create-course'>Create Course</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <div className=''>
              <div className='drawer drawer-end'>
                <input
                  id='my-drawer-4'
                  type='checkbox'
                  className='drawer-toggle'
                />
                <div className='drawer-content'>
                  <label
                    htmlFor='my-drawer-4'
                    className='avatar drawer-button btn btn-ghost btn-circle'
                  >
                    <div className='avatar'>
                      <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                        <img src={user?.profileImage} alt='profile Image' />
                      </div>
                    </div>
                  </label>
                </div>
                <div className='drawer-side'>
                  <label
                    htmlFor='my-drawer-4'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                  ></label>
                  <ul className='menu py-8 w-60 min-h-full bg-base-200 text-base-content text-lg'>
                    <li>
                      <NavLink
                        to={'/dashboard'}
                        className='flex justifyContent-between'
                      >
                        <CgProfile /> Profile
                      </NavLink>
                    </li>
                    <li onClick={handleLogout}>
                      <a className='flex justifyContent-between'>
                        <IoLogOutOutline /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              to='/login'
              className='flex justifyContent-between btn bg-blue text-white rounded-full'
            >
              <IoMdLogIn /> Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
