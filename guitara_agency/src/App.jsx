import './App.css'
import Home from './assets/components/Home/Home';
import Layout from './assets/components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shipping from './assets/components/Shipping/Shipping';
import Distributors from './assets/components/Distributors/Distributors';


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
        path: "/Shipping",
        element: <Shipping/>,
      },
      {
        path: "/distributors",
        element: <Distributors/>,
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
