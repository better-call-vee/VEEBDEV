import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div>
      <h1>Current Path: {location.pathname}</h1>
    </div>
  );
}

/*
useLocation returns an object like this:
{
    pathname: "/products",
    search: "?category=electronics",
    hash: "#featured",
    state: { fromDashboard: true },
    key: "abc123"
}

You should use useLocation whenever you need to:
Access Query Parameters : Extract data from the query string (e.g., ?id=123).
Respond to URL Changes : Perform side effects or update UI when the URL changes.
Navigate Programmatically : Use the current location to decide where to navigate next.
Preserve State : Access state passed during navigation (e.g., using navigate('/path', { state: { ... } })).
*/
