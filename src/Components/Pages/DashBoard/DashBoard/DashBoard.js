import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashBoard = () => {
    const { admin } = useAuth();
    return (
        <div>
            <div className="row mx-auto">
                <h1 className="bg-info">DashBoard</h1>
                <div className="col-12 col-md-2 bg-light text-dark py-4">
                    <nav className=" bg-secondary py-4">
                        <NavLink to="/dashBoard" className="py-4">DashBoard</NavLink>

                        {admin && <div>
                            <Link to={`/dashBoard/addWinter`}>
                                <li>Add Product</li>
                            </Link>
                            <Link to={`/dashBoard/winterCollections`}>
                                <li>Winter Collections</li>
                            </Link>
                            <Link to={`/dashBoard/manageAllOrders`}>
                                <li>Manage Orders</li>
                            </Link>
                            <Link to={`/dashBoard/makeAdmin`}>
                                <li>Add Admin</li>
                            </Link>
                        </div>}
                        {admin || <div>
                            {/* <Link to={`/dashBoard/payment`}>
                            <li> Payment</li>
                        </Link> */}
                            <Link to={`/dashBoard/myOrders`}>
                                <li>My Orders</li>
                            </Link>
                            <Link to={`/dashBoard/reviews`}>
                                <li>Reviews</li>
                            </Link>
                        </div>}
                    </nav>

                </div>
                <div className="col-12 col-md-10 bg-light text-success">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;




// import React from 'react';
// import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
// import { Link, Outlet } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
// import './Dashboard.css';


// const Dashboard = () => {

//     const { user, logOut, admin } = useAuth();
//     const { displayName, photoURL } = user;

//     return (
//         <div className="dashboard-bg">


//             <Row className="g-0  ">
//                 <Col md={2} className="custom-dashboard-link" >

//                     <hr className="custom-hr" />
//                     <Nav className="flex-column pb-3">
//                         <Link to="/home"> <span><i className="fas fa-house-user me-2"></i></span> Home</Link>

//                         {!admin && <><h5 className='text-white'>Customer Dashboard</h5>
//                             <Link to=""> <span><i className="fas fa-shopping-bag me-2"></i></span>Dashboard</Link>

//                             <Link to={`/dashboard/myOrders`}> <span><i className="fab fa-cc-amazon-pay me-2"></i></span> My Orders</Link>
//                             <Link to={`/dashboard/payment`}> <span><i className="fab fa-cc-amazon-pay me-2"></i></span> Payment</Link>
//                             <Link to={`/dashboard/review`}> <span><i className="fas fa-star-half-alt me-2"></i></span> Review</Link></>}

//                         {admin && <> <h5 className="text-white">Admin Dashboard</h5>
//                             <Link to={`/dashboard/allOrders`}> <span><i className="fas fa-shopping-cart me-2"></i></span> All Orders</Link>
//                             <Link to={`/dashboard/addProduct`}> <span><i className="fas fa-plus me-2"></i></span>Add Product</Link>
//                             <Link to={`/dashboard/makeAdmin`}> <span><i className="fas fa-user-cog me-2"></i></span> Make Admin </Link>
//                             <Link to={`/dashboard/manageProducts`}> <span><i className="fab fa-product-hunt me-2"></i></span>Manage Products</Link></>}



//                     </Nav>
//                 </Col>
//                 <Col md={10} className="dashboard-contain-bg">

//                     <Row className="g-0 dashboard-header ">
//                         <Navbar bg="white" expand="md">
//                             <Container>
//                                 <h3 className="fw-light fs-2">Dashboard</h3>
//                                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                                 <Navbar.Collapse id="basic-navbar-nav">
//                                     <Nav className="ms-auto pe-5">

//                                         <span className=" pt-2 fs-5 px-2 fw-lighter "> <Image className="user-picture" src={photoURL} roundedCircle /> {displayName}</span>
//                                         <Button variant="warning" onClick={logOut} className="text-white">Log Out <i className="fas fa-sign-out-alt ps-2"></i></Button>

//                                     </Nav>
//                                 </Navbar.Collapse>
//                             </Container>
//                         </Navbar>
//                     </Row>
//                     <Outlet></Outlet>

//                 </Col>
//             </Row>




//         </div >
//     );