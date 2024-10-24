import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';



import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GunProducts from './products/GunProducts';
import GunsIdData from './products/GunsIdData';
import Shop from './Shop file/Shop';
import Experience from './experience/Experience';
import AllExDetails from './experience/AllExDetails';
import AddProducts from './add products file/AddProducts';
import AddForm from './add products file/AddForm';
import AddItems from './add products file/AddItems';
import Update from './add products file/Update';
import Login from './firebase and sign/Login';
import SignUp from './firebase and sign/SignUp';
import AuthContext from './firebase and sign/AuthContext';
import PrivateRoute from './firebase and sign/PrivateRoute';



// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/gunsProducts",
        element:  <PrivateRoute><GunProducts></GunProducts></PrivateRoute>   ,
      },
      {
        path: "/buy",
        element:  <PrivateRoute><Shop></Shop></PrivateRoute> ,
      },
      { 
        path: "/ap",
        element:   <PrivateRoute><AddProducts></AddProducts></PrivateRoute>  ,
      },
      {
        path: "/EX",
        element:   <PrivateRoute><Experience></Experience></PrivateRoute> ,
        loader: () => fetch('https://bulletsbloods-server-node-js.onrender.com/gunsData')
      },
      {
        path: "/EX/:id",
        element:   <PrivateRoute><AllExDetails></AllExDetails></PrivateRoute> ,
        loader: ({params}) => fetch(`https://bulletsbloods-server-node-js.onrender.com/gunsData/${params.id}`)
      },
      {
        path: "/addForm",
        element:   <PrivateRoute><AddForm></AddForm></PrivateRoute> ,

      },
      {
        path: "/additems",
        element:   <PrivateRoute><AddItems></AddItems></PrivateRoute> ,

      },
      {
        path: "/update/:id",
        element:  <PrivateRoute><Update></Update></PrivateRoute> ,
        loader: ({params}) => fetch(`https://bulletsbloods-server-node-js.onrender.com/addData/${params.id}`)

      },
      {
        path: "login",
        element: <Login></Login> ,
      },
      {
        path: "signUp",
        element:  <SignUp></SignUp> ,
      },
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthContext>
      <RouterProvider router={router} />
      </AuthContext>
    </QueryClientProvider>
   
  </StrictMode>,
)
