import React from 'react';

const Register = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">Register</h1>
      <div className="card p-4 mt-4">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Register</button>

        </form>
      </div>
    </div>
  );

};

export default Register;
