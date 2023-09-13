import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>
  }
])

function App() {
  return (
    <div>
      
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
