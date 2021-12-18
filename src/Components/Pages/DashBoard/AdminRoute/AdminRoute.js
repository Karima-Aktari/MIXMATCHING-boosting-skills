// import React from 'react';

// const AdminRoute =({ children, ...rest }) => {
//     const { user, admin, isLoading } = useAuth();
//     const location = useLocation();
//     if (isLoading) {
//         return <Spinner animation="border" variant="warning" />
//     };

//     if (user.email && admin) {
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} />;

// };

// export default AdminRoute;