import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export function ProtectedAdmin({ children }) {
  const { user } = useContext(Context);

  if (!user) {
    console.log(user);
    return <Navigate to="/signin" replace />;
  }
  if (user.uid !== "Vf9dGNJPBNdshpxZzTTrg0SOxxl1") {
    //uid admin
    console.log(user.uid);
    alert("YOU DONt HAVE ACCESS ADMIN PLEASS LOGIN WITH ADMIN")
    return <Navigate to="/home" replace />;
  } else {
    console.log(user.uid);
    return children;
  }
}
