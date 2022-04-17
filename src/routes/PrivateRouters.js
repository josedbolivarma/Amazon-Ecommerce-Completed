import { Navigate } from "react-router-dom";

const PrivateRouters = ({isAuth, children}) => {
    return isAuth
    ? children
    : <Navigate to='/login' />
}

export default PrivateRouters;