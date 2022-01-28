
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {

      return (
        <>
          <div style={{color:"white", marginLeft:"3rem", marginTop:"1rem"}}>
            <span style={{marginRight:"0.5rem"}} role="img" aria-label="person waving">🙋</span> 
            Welcome {Auth.getProfile().data.firstName}
          </div>
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/orderHistory">
                Order History
              </Link>
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout user, then 
                  refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </>
      );
    } else {

      return (
        <>
          <div style={{color:"white", marginLeft:"3rem", marginTop:"1rem"}}>
            <span style={{marginRight:"0.5rem"}} role="img" aria-label="information symbol"> ℹ️ </span> Welcome guest, please log-in or sign-up
          </div>
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/signup">
                Signup
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        </>
        
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 style={{marginTop:"1.5rem",}}>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
