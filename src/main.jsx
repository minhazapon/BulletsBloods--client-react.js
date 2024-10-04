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
        element: <GunProducts></GunProducts>   ,
      },
      {
        path: "/buy",
        element: <Shop></Shop> ,
      },
      { 
        path: "/ap",
        element:  <AddProducts></AddProducts>  ,
      },
      {
        path: "/EX",
        element:  <Experience></Experience> ,
        loader: () => fetch('http://localhost:5000/gunsData')
      },
      {
        path: "/EX/:id",
        element:  <AllExDetails></AllExDetails> ,
        loader: ({params}) => fetch(`http://localhost:5000/gunsData/${params.id}`)
      },
      {
        path: "/addForm",
        element:  <AddForm></AddForm> ,

      },
      {
        path: "/additems",
        element:  <AddItems></AddItems> ,

      },
      {
        path: "/update/:id",
        element: <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/addData/${params.id}`)

      },
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
   
  </StrictMode>,
)
