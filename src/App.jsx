import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import app from './auth/auth';
import { getAuth } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <main className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% pt-20'>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </main>
  );
}
