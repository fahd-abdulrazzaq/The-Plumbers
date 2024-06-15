/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { UserContext } from '../contexts/UserContext';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const { user } = useContext(UserContext);

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

  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0'>
      <div
        className={`navbar xl:px-24 ${
          sticky
            ? 'shadow bg-base-100 transition-all ease-in-out duration-300'
            : ''
        }`}
      >
        <div className='navbar-start'>
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
          {/* <a className='btn bg-blue text-white rounded-full'>Login</a> */}
          {user ? (
            <NavLink
              to='/login'
              className='flex justifyContent-between btn bg-blue text-white rounded-full'
            >
              <IoMdLogIn /> Logout
            </NavLink>
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
