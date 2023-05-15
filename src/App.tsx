import "antd/dist/reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import Viewport from "./layout/Viewport/Viewport";
import UserDetailsContextProvider from "./contexts/UserDetailsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Viewport />,
    children: [
      {
        path: "/",
        element: <DashboardOverview />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <UserDetailsContextProvider>
        <RouterProvider router={router} />
      </UserDetailsContextProvider>
    </div>
  );
}

export default App;
