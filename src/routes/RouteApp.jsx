import { useAuth } from "@/context/AuthProvider";
import LayoutPage from "@/layout";
import Login from "@/pages/Auth/Login";
import { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes";

const getPageRoute = () => {
  return routes.map((route) => {
    const Comp = route?.component;
    return {
      path: route?.path,
      element: <PrivateRoute component={Comp} isAllowed={true} />,
    };
  });
};

const RenderRoutes = (isAuthen) => {
  return [
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/",
      element: !!isAuthen ? <LayoutPage /> : <Navigate to="/auth/login" />,
      children: getPageRoute(),
    },
  ];
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate("/auth/login", { replace: true });
    }
  }, [auth?.user]);
  const element = useRoutes(RenderRoutes(auth?.user));

  return element;
};

export default RouterApp;
