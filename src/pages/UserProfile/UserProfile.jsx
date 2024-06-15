import React, { useContext, useState } from 'react';
import FileBase from 'react-file-base64';
import { getAuth, updateProfile } from 'firebase/auth';
import { UserContext } from '../../contexts/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const updateUserInfo = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: selectedFile,
      });
      setName('');
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%  py-20 container mx-auto text-white'>
      <div className='bg-blue w-[80%] mx-auto p-10 shadow-md shadow-slate-300 lg:w-[40%]'>
        <h2 className='text-center text-2xl mb-6'>User Profile Update</h2>

        <div className='flex justify-center items-center shadow-md'>
          <form>
            <div className='flex flex-col mt-2'>
              <label htmlFor='name' className='text-xl mb-1'>
                Name
              </label>
              <input
                type='name'
                id='name'
                className='pt-2 border-none outline-none placeholder:px-2 py-2 w-80 bg-white text-blue'
                placeholder='enter your name'
                value={user.displayName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col mt-2'>
              <label htmlFor='email' className='text-xl mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='pt-2 border-none outline-none placeholder:px-2 py-2 w-80 bg-white text-blue'
                placeholder='enter your email'
                value={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mt-2'>
              <input
                type='file'
                name='file'
                id='file'
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
              />
            </div>

            <div className='bg-white text-center mt-10 rounded-md p-2 text-blue text-lg hover:bg-slate-950 hover:text-white hover:transition hover:duration-200'>
              <button onClick={updateUserInfo}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
