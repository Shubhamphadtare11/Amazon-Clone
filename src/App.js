import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
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
