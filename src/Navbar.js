import React from "react";

// Accept props from App.js
function Navbar({ search, handleInput, myfunc }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a style={{ marginLeft: "20px" }} className="navbar-brand" href="/">
        Home
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInput} // Use handleInput from props
            value={search} // Use search state from props
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                myfunc();
              }
            }}
          />
          <button
            style={{ marginRight: "20px" }}
            className="btn btn-outline-success"
            type="button"
            onClick={myfunc} // Use myfunc from props
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
