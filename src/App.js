import { createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom'
import "./style.scss";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Layout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/blog/:id',
        element:<Blog />
      },
      {
        path:'/createBlog',
        element:<CreateBlog />
      },
    ]
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
