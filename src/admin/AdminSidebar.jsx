import React from 'react'
import { Link } from 'react-router-dom'
import adminstyles from './admin.module.css'

const AdminSidebar = () => {
  return (
      <ul className={adminstyles.sidebar}>
          <li>
              <Link to="">Add Course</Link>
          </li>
          <li>
              <Link to="deleteeditcourse">Delete/Edit Course</Link>
          </li>
          <li>
              <Link to="studentdata">Student Data</Link>
          </li>
          <li>
              <Link to="blog">Blog</Link>
          </li>
          <li>
              <Link to="deleteeditblog">Delete/Edit Blog</Link>
          </li>
          <li>
              <Link to="adddemovideos">Add Demo Videos</Link>
          </li>
          <li>
              <Link to="deleteeditdemovideos">Delete/Edit Demo Videos</Link>
            </li>
    </ul>
  )
}

export default AdminSidebar