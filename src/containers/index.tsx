import {useEffect, useRef, useState}  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';

import {About, Contact, Home, NotFound} from '../pages/_route';
import Navbar from '../components/reuseables/navbar';
import Works from '../pages/works';

const IndexRoutes = () => {
  // eslint-disable-next-line
  // const [loading, setLoading] = useState(true)
  const { pathname } = useLocation();

  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      // Remove the animation class if it exists
      textRef.current.classList.remove("slide-in-right");
      
      // Force a reflow to reset the animation
      void textRef.current.offsetWidth;
      
      // Add the animation class to trigger the animation
      textRef.current.classList.add("slide-in-right");
      
    }
  }, [pathname]);
  
  return (
    <div className={`flex flex-col bg-primary items-center w-full overflow-auto select-none h-screen`} ref={textRef}>
      <Navbar/>
      <AlertProvider>
        <div className='flex flex-col lg:w-8/12 w-11/12'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>
        <Alert />  
      </AlertProvider>
    </div>
  )
}

export default IndexRoutes;