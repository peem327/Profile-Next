import React from 'react';
import Link from "next/link";


class Navbar extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <li className="nav-item nav-link link-color"> <Link href="/">I'm Peem</Link></li>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <li className="nav-item nav-link link-color"><Link href="/">Home</Link></li>
              <li className="nav-item nav-link link-color"><Link href="/about">Profile</Link></li>
              <li className="nav-item nav-link link-color"><a href="https://forms.gle/3KuGuRGmrwrVFC9a6">Contact</a></li>
            </div>
          </div>
        </nav>   
      </div>
    );
  }
}

export default Navbar;
