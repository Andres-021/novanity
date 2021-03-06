import {Navigate, Outlet} from 'react-router-dom';

// function PrivateRoute () {
const PrivateRouteAdmin = () => {
  
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);


  return(
    user.rol === "Admin"
    ? <Outlet />
    : <Navigate to='/'/>
  );
};

export default PrivateRouteAdmin;
