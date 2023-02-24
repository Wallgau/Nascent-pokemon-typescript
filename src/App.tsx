// import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Contact from './pages/contact';
import Pokemon from './pages/pokemon';
import Home from './pages/home';
import Review from './pages/review';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/pokemon',
    element: <Pokemon />,
  },
  {
    path: '/review',
    element: <Review />,
  },
]);

export default function App() {
  return (
    <>
      <header>
        <h1>Nascent</h1>
      </header>
      <RouterProvider router={router} />
    </>
  );
}
