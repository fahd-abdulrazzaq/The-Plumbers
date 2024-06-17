import React, { useContext, useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { doc, updateDoc } from 'firebase/firestore';
import app, { db } from '../../auth/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const updateUserInfo = async (e) => {
    e.preventDefault();
    try {
      const user = getAuth(app).currentUser;
      await updateDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        profileImage,
      });
      navigate('/dashboard');

      toast.success('User profile updated successfully', {
        position: 'top-center',
        autoClose: 2000,
      });
      setFirstName('');
      setLastName('');
      setProfileImage(null);
    } catch (error) {
      toast.error('User profile did not updated', {
        position: 'top-center',
        autoClose: 2000,
      });
      console.log(error);
    }
  };
  // handling profile Image
  const handleProfileImage = ({ base64 }) => {
    setProfileImage(base64);
  };

  return (
    <section className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%  py-20 container mx-auto text-white'>
      <div className='bg-blue w-[80%] mx-auto p-10 shadow-md shadow-slate-300 lg:w-[40%]'>
        <h2 className='text-center text-2xl mb-6'>User Profile Update</h2>

        <div className='flex justify-center items-center shadow-md'>
          <form onSubmit={updateUserInfo}>
            <div className='flex flex-col mt-2'>
              <label htmlFor='name' className='text-xl mb-1'>
                First Name
              </label>
              <input
                type='name'
                id='name'
                className='pt-2 border-none outline-none placeholder:px-2 py-2 w-80 bg-white text-blue'
                placeholder='enter your name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='flex flex-col mt-2'>
              <label htmlFor='name' className='text-xl mb-1'>
                Last Name
              </label>
              <input
                type='name'
                id='name'
                className='pt-2 border-none outline-none placeholder:px-2 py-2 w-80 bg-white text-blue'
                placeholder='enter your name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='mt-2'>
              <FileBase64
                multiple={false}
                type='file'
                onDone={handleProfileImage}
              />
            </div>

            <div className='bg-white text-center mt-10 rounded-md p-2 text-blue text-lg hover:bg-slate-950 hover:text-white hover:transition hover:duration-200'>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
