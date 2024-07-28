import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Layout/Header';
import Register from './pages/Auth/Register';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Auth/Login';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/User/Profile';
import Orders from './pages/User/Orders';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';

// import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <>
    <Toaster />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/policy" element={<Policy/>} />
    <Route path="*" element={<PageNotFound/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />

  <Route path="/dashboard" element={<PrivateRoute/>} >
    <Route path="user" element={<Dashboard/>} />
    <Route path="user/orders" element={<Orders/>}/>
    <Route path="user/profile" element={<Profile/>}/>
    </Route>
    
    <Route path="/dashboard" element={<AdminRoute/>} >
    <Route path="admin" element={<AdminDashboard/>} />
    <Route path="admin/create-category" element={<CreateCategory/>}/>
    <Route path="admin/create-product" element={<CreateProduct/>}/>
    <Route path="admin/products" element={<Products/>}/>
    <Route path="admin/product/:slug" element={<UpdateProduct />} />
    <Route path="admin/users" element={<Users/>}/>
    </Route>
    <Route path="/forgot-password" element={<ForgotPassword/>} />

  </Routes>
    </>
    
   
  );
}

export default App;
