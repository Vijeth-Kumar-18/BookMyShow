import React from 'react';

const Login = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">Login</h1>
      <div className="card p-4 mt-4">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>

          <div className="mt-3 text-center">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );

};

export default Login;
