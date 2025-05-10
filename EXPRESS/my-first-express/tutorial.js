// Fetch phone data in your React app from your Express server (http://localhost:9000/phones), then display either the full list or a single phone by ID, all using React Router’s loader functions.

/*
create the react app

npx create-react-app my-phone-app
cd my-phone-app
npm install react-router-dom@6
*/

// React router demo
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PhoneList from './pages/PhoneList';
import PhoneDetail from './pages/PhoneDetail';

const API_BASE = 'http://localhost:9000'; // this is the base of API

const router = createBrowserRouter([
    {
        path: '/',
        element: <PhoneList />,
        loader: () => fetch(`${API_BASE}/phones`)
    },
    {
        path: '/phone/:id',
        element: <PhoneDetail />,
        loader: ({ params }) =>
            fetch(`${API_BASE}/phones/${params.id}`)
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}


//main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
);


//Phone data shower
import { useLoaderData, Link } from 'react-router-dom';

export default function PhoneList() {
  // 1️⃣ Grab the data fetched by loader()
  const phones = useLoaderData();

  return (
    <div>
      <h1>All Phones</h1>
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>
              {phone.brand} {phone.model}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
