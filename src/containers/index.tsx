import {useState}  from 'react';
import { Routes, Route } from 'react-router-dom';

import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';

import {About, Home, NotFound} from '../pages/_route';
import Navbar from '../components/reuseables/navbar';

const IndexRoutes = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, [])

  // if (loading) {
  //   return <Onboarding/>
  // }
  
  return (
    <div className={`flex flex-col bg-primary items-center w-full overflow-auto h-screen`}>
      <Navbar/>
      <AlertProvider>
        <div className='flex flex-col lg:w-3/5 w-11/12'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/games" element={<Games/>} /> */}
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>
        <Alert />  
      </AlertProvider>
    </div>
  )
}

export default IndexRoutes;