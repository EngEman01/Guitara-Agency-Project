import './App.css'
import Home from './assets/components/Home/Home';
import Layout from './assets/components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />,
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
