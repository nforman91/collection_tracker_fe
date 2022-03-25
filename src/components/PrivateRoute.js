// import { Navigate } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// const PrivateRoute = ({ children, ...rest }) => {
//     return (
//         <Route {...rest} render={(location) => (
//             isAuthenticated ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }})
//         )}/>
//     );
// };

// const PrivateRoute = ({ component:Component, ...rest}) => {
//     return (
//         <Route {...rest} render={(props) => {
//             if(!auth){
//                 return <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
//             }
//             return <Component {...props}/>
//         }} />
//     );
// };

const PrivateRoute = ({ component: Component, ...rest }) => {
  const shouldRedirect = true;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return `${shouldRedirect && <Navigate replace to="/login" />}`;
        }
      }}
    />
  );
};

export default PrivateRoute;
