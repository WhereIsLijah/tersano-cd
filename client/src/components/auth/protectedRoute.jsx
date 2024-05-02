import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authProvider';

const ProtectedRoute = ({ children }) => {
    const { authToken } = useAuth();
    console.log("AuthToken retrieved in ProtectedRoute:", authToken);  
    const location = useLocation();

    if (!authToken) {
        console.log("No authToken, navigating to /login");
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;
