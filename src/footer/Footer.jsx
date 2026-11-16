import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>     
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <p>&copy; 2026 All rights reserved.</p>
                  </div>
                  <div className="col-md-6">
                      <p className="text-end">Designed by Student Management.</p>
                  </div>
              </div>
              
        </div>
    </footer>
  )
}

export default Footer