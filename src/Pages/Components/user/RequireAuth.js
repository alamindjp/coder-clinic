import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../../SharedPage/Footer/Loader';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return alert(error?.message)
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    
    
    return children;
}
export default RequireAuth;