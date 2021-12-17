import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
// import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleSignIn = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate);
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (
        <div className="row py-4 mx-auto bg-dark h-100 py-5">
            <div className="col-md-6 col-12 py-5">
                <form onSubmit={handleSignIn}>
                    <h1 className="text-info p-2">Please Login</h1>
                    <br />
                    <input className="px-4 py-1 rounded-pill" type="email" name="email" onChange={handleOnChange} placeholder="Enter Your Email" required />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" type="password" name="password" onChange={handleOnChange} placeholder="Enter Your Password" id="" required />
                    <br /><br />
                    <input className="mt-3 w-50 btn btn-info rounded-3 m-auto" type="submit" value="Login" />
                </form>

                <br />
                <p>New to Our Site ? <Link to="/register">Please Register</Link></p>
                <div>------------------------------</div>
                <br />
                <button onClick={handleGoogleSignIn} className="btn btn-warning">Google SignIn</button>
            </div>
            <div className="col-md-6 col-12 py-5">
                <img src="https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777?b=1&k=20&m=1249219777&s=170667a&w=0&h=0dXNU-fjD9aOMmrvlppQhJ9gOqnW9dslKFdYLQN9rnk=" className="rounded-3" alt="" />
            </div>
        </div>
    );
};

export default Login;