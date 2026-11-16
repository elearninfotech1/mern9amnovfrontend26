import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './admin/Register';
import Header from './header/Header';
import Footer from './footer/Footer';
import Admin from './admin/Admin';
import ForgotPassword from './admin/ForgotPassword';
import AdminDashboard from './admin/AdminDashboard';
import AddCourse from './admin/AddCourse';
import DeleteCourse from './admin/DeleteCourse';
import StudentData from './admin/StudentData';
import DeleteBlog from './admin/DeleteBlog';
import AddDemo from './admin/AddDemo';
import DeleteDemo from './admin/DeleteDemo';
import MainPage from './innerpages/MainPage';
import Registration from './innerpages/Registration';
import Courses from './innerpages/Courses';
import Blog from './innerpages/Blog';
import DemoVideos from './innerpages/DemoVideos';
import ContactUs from './innerpages/ContactUs';
const Routing = () => {
  return (
      <>
          <Header />
          <Routes>       
              <Route path="/" Component={MainPage} />  
              <Route path="/courses" Component={Courses} />
              <Route path="/registercourse" Component={Registration} />
              <Route path="/blog" Component={Blog} />
              <Route path="/demovideos" Component={DemoVideos} />
              <Route path="/contactus" Component={ContactUs} />
              <Route path="/admin" Component={Admin} />
              <Route path="/register" Component={Register} />
              <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/admindashboard" Component={AdminDashboard}>
              <Route path="" Component={AddCourse} />
              <Route path="deleteeditcourse" Component={DeleteCourse} />
              <Route path="studentdata" Component={StudentData} />
              <Route path="blog" Component={Blog} />
              <Route path="deleteeditblog" Component={DeleteBlog} />
              <Route path="adddemovideos" Component={AddDemo} />
              <Route path="deleteeditdemovideos" Component={DeleteDemo} />
          </Route>
          <Route path="*" Component={() => <h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
    </>
  )
}

export default Routing