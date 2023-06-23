import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/Store";

interface ProtectedRouteProps {
	children: ReactNode;
	requiredRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps>  = ({ children, requiredRole }) => {
	const { isAuthenticated, userRole } = useSelector((state: RootState) => state.auth);
  
	if (isAuthenticated && userRole === requiredRole) {
	  return <>{children}</>;
	}
	
	return <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;