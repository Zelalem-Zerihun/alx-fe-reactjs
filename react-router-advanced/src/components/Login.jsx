const Login = ({ setAuth }) => (
  <div>
    <h2>Login Page</h2>
    <button onClick={() => setAuth(true)}>Log In</button>
  </div>
);

export default Login;
