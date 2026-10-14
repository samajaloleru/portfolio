import { Routes, Route, useLocation } from 'react-router-dom';

import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';

import { About, Contact, Home, NotFound, Work } from '../pages/_route';
import Navbar from '../components/reuseables/navbar';
import Footer from '../components/reuseables/footer';

const IndexRoutes = () => {
  const { pathname } = useLocation();

  return (
    <AlertProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] bg-accent text-bg px-4 py-2 rounded">
        Skip to content
      </a>
      <div className="grain" aria-hidden />
      <Navbar />
      {/* keyed by path so every page replays its entry animation */}
      <main id="main" key={pathname} className="min-h-[100dvh] w-full max-w-[1400px] mx-auto px-5 md:px-10">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/works" element={<Work/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
      <Alert />
    </AlertProvider>
  )
}

export default IndexRoutes;
