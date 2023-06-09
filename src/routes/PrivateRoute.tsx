import React from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";
import { RootState } from '../store'

interface PrivateRouted extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouted> = ({ component: Componet, ...state }) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

}