import { useSelector } from "react-redux";
import { checkAuthentication } from "../features/authSlice";
import { RootState } from '../store/Store'
import LoginPage from "../pages/LoginPage";
import { createContext, useContext } from "react";

export const authContext = createContext<string>('')
export const useAuth = () => {
    const context = useContext(authContext)
    if(context!) throw new Error("There isn't auth provider")
    return context
}

interface contextProps {
    children: React.ReactNode;
  }
const AuthProvider: React.FC<contextProps> = ({ children }) => {
    const contextState = useSelector((store: RootState) => store.auth)
    return ( contextState.isAuthenticated ? 
        <AuthProvider>{children}</AuthProvider> : <LoginPage />
    )
}