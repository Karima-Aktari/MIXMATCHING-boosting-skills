import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/Components/Pages/Home/Home/Home';
import About from '../src/Components/Pages/About/About';
import Blogs from '../src/Components/Pages/Blogs/Blogs';
import Contact from '../src/Components/Pages/Contact/Contact';
import Login from '../src/Components/Pages/Login/Login';
import Register from '../src/Components/Pages/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import ProductDetails from './Components/Pages/Home/ProductDetails/ProductDetails';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Components/Pages/DashBoard/DashBoard/DashBoard';
import AddWinterProduct from './Components/Pages/DashBoard/AddProduct/AddWinterProduct';
import WinterCollections from './Components/Pages/DashBoard/WinterCollections/WinterCollections';
import ManageAllOrders from './Components/Pages/DashBoard/ManageAllOrders/ManageAllOrders';
import NotFound from './Components/NotFound/NotFound';
import MoreProducts from './Components/Pages/Home/MoreProducts/MoreProducts';
import MyOrders from './Components/Pages/DashBoard/MyOrders/MyOrders';
import MakeAdmin from './Components/Pages/DashBoard/MakeAdmin/MakeAdmin';
import AdminRoute from './Components/Pages/DashBoard/AdminRoute/AdminRoute';
import Reviews from './Components/Pages/DashBoard/Reviews/Reviews';
import Navigation from './Components/Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/dashBoard" element={<PrivateRoute><DashBoard /></PrivateRoute>} >
              <Route path={`/dashBoard/addWinter`} element={<AdminRoute><AddWinterProduct /></AdminRoute>} />
              <Route path={`/dashBoard/winterCollections`} element={<AdminRoute><WinterCollections /></AdminRoute>} />
              <Route path={`/dashBoard/manageAllOrders`} element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
              <Route path={`/dashBoard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path={`/dashBoard/myOrders`} element={<MyOrders />} />
              <Route path={`/dashBoard/reviews`} element={<Reviews />} />

            </Route>

            <Route exact path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/winter/:winterId" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route path="/moreProducts" element={<MoreProducts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

