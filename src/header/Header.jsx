import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <nav
        className="navbar navbar-expand-sm"
      >
        <div className="container">
            <Link className="navbar-brand" to="/">Student Management</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registercourse">Register Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                          </li>
                          <li className="nav-item">
                        <Link className="nav-link" to="/demovideos">Demo Videos</Link>
                          </li>
                          <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                    </li>
                   
                </ul>                
            </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Header