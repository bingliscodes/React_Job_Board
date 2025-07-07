import { useNavigate } from "react-router";

export default function PrivateRoute({ children }) {
  const nav = useNavigate();

  if (localStorage.getItem("loggedIn") === true) {
    return children;
  }
  if (
    !localStorage.getItem("loggedIn") ||
    localStorage.getItem("loggedIn") === false
  ) {
    console.log("not logged in");
    nav("/");
  }
}
