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
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}
