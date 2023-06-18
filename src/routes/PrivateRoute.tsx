import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";
import { RootState } from '../store'
import LoginPage from "../pages/LoginPage";
import { checkAuthentication } from "../features/authSlice";

interface Props {
  privateValidation: boolean;
}

const authValidationUser = ({ validationUser }: Props) => {
	const userState = useSelector((store: RootState) => store.auth)
	return userState.isAuthenticated ?  privateValidationUser : publicValidationUser && <LoginPage />
}