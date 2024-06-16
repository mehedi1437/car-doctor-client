import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="text-center"><span className="loading loading-dots loading-lg "></span></div> 
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace={true} state={location.pathname} ></Navigate>
};

export default PrivetRoutes;