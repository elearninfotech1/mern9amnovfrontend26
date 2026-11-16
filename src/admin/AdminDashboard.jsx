import React from 'react'
import adminstyles from './admin.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
        <section className={adminstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Admin Dashboard</h2>
                        </div>
                    </div>
                </div>
          </section>
          <section className={`py-4`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                          <AdminSidebar />
                      </div>
                      <div className="col-md-9">
                          <Outlet />
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default AdminDashboard