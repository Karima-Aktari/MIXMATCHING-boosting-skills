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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import {
//   BrowserRouter, Route, Routes
// } from "react-router-dom";
// import './App.css';
// import AboutUs from './components/AboutUs/AboutUs';
// import AdminRoute from './components/AdminRoute/AdminRoute';
// import AllOrders from './components/Dashboard/AllOrders/AllOrders';
// import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
// import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
// import MyOrders from './components/Dashboard/MyOrders/MyOrders';
// import Payment from './components/Dashboard/Payment/Payment';
// import Review from './components/Dashboard/Review/Review';
// import AddProduct from './components/Home/AddProduct/AddProduct';
// import Details from './components/Home/Details/Details';
// import Home from './components/Home/Home/Home';
// import Login from './components/Login/Login/Login';
// import Register from './components/Login/Register/Register';
// import NotFound from './components/NotFound/NotFound';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AuthProvider from './contexts/AuthProvider';


// function App() {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <BrowserRouter>

//           <Routes>
//             <Route path="/" element={<Home />}>
//             </Route>
//             <Route path="/home" element={<Home />}>
//             </Route>
//             <Route path="/aboutUs" element={<AboutUs />}>
//             </Route>
//             {/* <Route path="/makeAdmin" element={<MakeAdmin/>}>
//        </Route>

//       <Route path="/addProduct" element={<AddProduct/>}>
//        </Route> */}
//             <Route path="/details/:id" element={<PrivateRoute><Details /></PrivateRoute>}>
//             </Route>
//             <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
//               <Route path="/dashboard" >

//               </Route>
//               <Route path={`/dashboard/payment`} element={<Payment />}>

//               </Route>
//               <Route path={`/dashboard/myOrders`} element={<MyOrders />}>
//               </Route>
//               <Route path={`/dashboard/review`} element={<Review />}>
//               </Route>
//               <Route path={`/dashboard/allOrders`} element={<AdminRoute><AllOrders /></AdminRoute>}>

//               </Route>
//               <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>}>

//               </Route>
//               <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>

//               </Route>
//               <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>}>

//               </Route>

//             </Route>
//             <Route path="/login" element={<Login />}>
//             </Route>
//             <Route path="/register" element={<Register />}>
//             </Route>
//             <Route path="*" element={<NotFound />}>
//             </Route>

//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;
