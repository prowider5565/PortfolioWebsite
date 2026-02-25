import Home from './pages/Home';
import Companies from './pages/Companies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Companies',
    path: '/companies',
    element: <Companies />
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  },
  {
    name: 'About',
    path: '/about',
    element: <About />
  }
];

export default routes;
