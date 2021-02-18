import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function NavBard(props) {
  console.log(props);
  
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Google Books</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" aria-current="page" to="/">Search</Link>
        <Link className="nav-link" to="/savedPage">Saved</Link>
        
      </div>
    </div>
  </div>
</nav>

);
}

export default NavBard;