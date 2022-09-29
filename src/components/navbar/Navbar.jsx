import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">LOGO</div>
        <div className="links">
          <Link className="link" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="link" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="link" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="link" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="link" to="/">
            <h4>Home</h4>
          </Link>
            <p>userX</p>
            <span>Logout</span>
            <span className="create-new">
              <Link to="/createBlog" className="link">Create New</Link>
            </span>
        </div>
      </div>
    </nav>

  )
}

export default Navbar