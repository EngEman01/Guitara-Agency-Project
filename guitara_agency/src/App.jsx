import './App.css'
import Home from './assets/components/Home/Home';
import Layout from './assets/components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tiktok from './assets/components/Shipping/tiktok';
import Mico from './assets/components/Shipping/mico';
import Bigo from './assets/components/Shipping/bigo';
import DistributorsBigo from './assets/components/Distributors/DistributorsBigo';
import DistributorsMico from './assets/components/Distributors/DistributorsMico';
import DistributorsTiktok from './assets/components/Distributors/DistributorsTiktok';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/tiktok",
        element: <Tiktok/>,
      },
      {
        path: "/mico",
        element: <Mico/>,
      },
      {
        path: "/bigo",
        element: <Bigo/>,
      },
      {
        path: "/distributorsbigo",
        element: <DistributorsBigo/>,
      },
      {
        path: "/distributorsmico",
        element: <DistributorsMico/>,
      },
      {
        path: "/distributorstiktok",
        element: <DistributorsTiktok/>,
      },
    
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      </>
  )
}

export default App


// import './App.css';
// import Home from './assets/components/Home/Home';
// import Layout from './assets/components/Layout';
// import Shipping from './assets/components/Shipping/Shipping';
// import Distributors from './assets/components/Distributors/Distributors';
// import ErrorBoundary from './assets/components/ErrorBoundary'; // Import ErrorBoundary
// import NotFound from './assets/components/NotFound';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     errorElement: <ErrorBoundary />, // Add errorElement here
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/Shipping/*", // Use /* to match nested routes
//         element: <Shipping/>,
//       },
//       {
//         path: "/distributors",
//         element: <Distributors/>,
//       },
//       {
//         path: '*', // This will catch all unmatched routes
//         element: <NotFound />, // Render NotFound for unmatched routes
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// }

// export default App;