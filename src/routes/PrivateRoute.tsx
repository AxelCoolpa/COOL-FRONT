import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";
import { RootState } from '../store'
import LoginPage from "../pages/LoginPage";
import { checkAuthentication } from "../features/authSlice";

import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { Private } from '../pages/Private';
import { AppStore } from '../redux/store';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;