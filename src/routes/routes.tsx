import { createBrowserRouter } from "react-router-dom";
import { Details, Home } from "../pages";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      }
    ]
  }
])