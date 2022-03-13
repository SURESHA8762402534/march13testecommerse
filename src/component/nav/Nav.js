import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    const count = useSelector((storeValue)=>{
        return storeValue.products.length
    })

  return (
    
    <>
   <nav className="navbar bg-warning navbar-expand-lg navbar-light ps-5">
  <a className="navbar-brand" href="#">&#128722;Cart <sup className='font-weight-bold'>{count}</sup></a>
  {/* <Link to='/Cart'>&#128722;Cart</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
&nbsp;
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
  </ul>
  </div>
  <input className="form-control ms-5 mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success ml-5 my-2 my-sm-0" type="submit">Search</button>
</nav>
    </>
  )
}

export default Nav