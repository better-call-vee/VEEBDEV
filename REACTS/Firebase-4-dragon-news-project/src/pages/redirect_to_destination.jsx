// PrivateRoute Line 9 and Line 19 refer to using the location that will be redirected.

// then, at Login.jsx, Line 21: navigate(`${location.state ? location.state : "/"}`);
// Here , if we find any state in the location object, we use that and navigate to that after loggin in successfully.