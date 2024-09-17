import Helmet from "react-helmet";
import "../styles/Login.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [type, setType] = useState("password");
  const [label, setLabel] = useState("Show");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setLabel("Hide");
    } else {
      setType("password");
      setLabel("Show");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Products Up</title>
      </Helmet>
      <Header />

      <div className="container-fluid login-page-content">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-lg-5 col-md-10 p-0 mt-4">
            <div className="card border-0 rounded-0">
              <div className="card-header bg-white px-0 pb-0 pt-3">
                <h3 className="fw-bold my-4 text-center">Login</h3>
                <ul className="nav nav-tabs justify-content-center border-bottom-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-dark"
                      aria-current="page"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="/signup">
                      Create account
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body px-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="emailInput"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="passwordInput" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={type}
                        name="password"
                        className="form-control border-0"
                        id="passwordInput"
                      />
                      <span
                        className="input-group-text bg-white password-toggler border-0"
                        onClick={handleToggle}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="btn w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-7 d-none d-lg-flex login-content"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
