import { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';

import IndexRoutes from './containers/index';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/*" element={<IndexRoutes/>} />
    </Routes>
  )
}

export default App;
