import React from 'react';

function Nav() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/">
        Portfolio 
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="/projects"
            role="button"
            aria-expanded="false"
          >
            Projects
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="https://turtle2001.github.io/Kronos-StatIM/#schedule">
              Kronos-StatIM
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="https://pacific-cliffs-29640.herokuapp.com/">
                Text Editor
              </a>
            </li>
            {/* <li>
              <a className="dropdown-item" href="#">
                Some other project here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                last project
              </a>
            </li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/PeterM012">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </React.Fragment>
  );
}

export default Nav;