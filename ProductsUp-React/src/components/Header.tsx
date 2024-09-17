import { NavLink } from "react-router-dom";
import brandLogo from "/productsUp.svg";
import "../styles/Header.css";

interface HeaderStatus {
  signedIn?: boolean;
  name?: string;
  messages?: boolean;
  notifications?: boolean;
}

function Header({ headerStatus = {} }: { headerStatus?: HeaderStatus }) {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-white py-2 shadow">
        <div className="container-md navbar-container mx-auto">
          <a className="navbar-brand" href="/">
            <img
              src={brandLogo}
              alt=""
              height={40}
              className="d-inline-block align-middle me-2"
            />
            <span className="navbar-brand mb-0 h1">
              <strong>Products Up</strong>
            </span>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {headerStatus.signedIn ? (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link my-0 text-dark underline"
                    to="/account"
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person h5 mb-0 me-1"></i>
                      <span className="align-middle d-none d-md-flex me-1">
                        {headerStatus.name}
                      </span>
                      <i className="bi bi-chevron-down mb-0"></i>
                    </div>
                  </NavLink>
                  <div
                    className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start px-2"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item mb-1" href="/account/profile">
                      Mijn profiel
                    </a>
                    <a className="dropdown-item mb-1" href="/logout">
                      Uitloggen
                    </a>
                  </div>
                </li>
              ) : (
                <li className="nav-item my-auto">
                  <NavLink
                    className="nav-link my-0 text-dark underline"
                    aria-current="page"
                    to="/login"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person h5 mb-0 me-1"></i>
                      <span className="align-middle d-none d-md-flex">
                        Login
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}
              <li className="nav-item my-auto">
                <p className="nav-link my-0 py-0">
                  <button className="d-flex align-items-center btn btn-sm text-white mb-xs-2">
                    <i className="bi bi-box-arrow-in-down h5 mb-0"></i>
                    <span className="align-middle ms-1 d-none d-md-flex">
                      New file
                    </span>
                  </button>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
