import { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';

import IndexRoutes from './containers/index';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return (
    <div className="flex flex-col justify-center items-center lg:gap-[5rem] overflow-hidden gap-7 w-full h-screen">
      <Routes>
        <Route path="/*" element={<IndexRoutes/>} />
      </Routes>
    </div>
  )
}

export default App;