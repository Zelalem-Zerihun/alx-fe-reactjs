import useAuth from "./useAuth";

const Login = () => {
  const { login } = useAuth(); // Use the login function from useAuth

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default Login;
