import { useAuth } from '@/context/AuthProvider';
import LayoutPage from '@/layout';
import Login from '@/pages/Auth/Login';
import { useEffect } from 'react';
import { Navigate, useNavigate, useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes, { routesAdmin, routesUser, routesManager } from './routes';

const getPageRoute = (isAuthen) => {
  let R = null;
  if (isAuthen?.role === 1) {
    R = [...routes, ...routesAdmin];
  } else if (isAuthen?.role === 2) {
    R = [...routes, ...routesManager];
  } else {
    R = [...routes, ...routesUser];
  }
  return R.map((route) => {
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
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/',
      element: !!isAuthen ? <LayoutPage /> : <Navigate to="/auth/login" />,
      children: getPageRoute(isAuthen),
    },
  ];
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate('/auth/login', { replace: true });
    }
  }, [auth?.user]);
  const element = useRoutes(RenderRoutes(auth?.user));

  return element;
};

export default RouterApp;
