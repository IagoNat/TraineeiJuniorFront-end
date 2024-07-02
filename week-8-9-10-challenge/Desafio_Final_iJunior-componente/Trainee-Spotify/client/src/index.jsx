import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserProvider } from './context/userContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './routes/home';
import { ArtistsPage } from './routes/artists';
import App from './App';
import { AuthPage } from './routes/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/artists',
        element: <ArtistsPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)

