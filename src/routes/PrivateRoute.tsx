import { RouteProps } from "react-router-dom";

interface PrivateRouted extends RouteProps {
    component: React.ComponentType<any>;
}

