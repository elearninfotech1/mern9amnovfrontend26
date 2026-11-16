import React,{useState,useEffect} from 'react'
import innerStyles from './innerStyles.module.css';
import axios from 'axios';
import CustomFetch from './CustomFetch';
import { apiRootPath } from '../App';
const MainPage = () => {
  const data = CustomFetch(`${apiRootPath}/course`); 
  const data1 = CustomFetch(`${apiRootPath}/demo`); 
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <img src='https://hyderabadittrainings.com/images/slider/s1.jpg' alt='Banner' className='w-100' />
              </div>
            </div>
          </div>
      </section>
      <section className={`py-4 ${innerStyles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1><span>Best Software Training</span> Institute in Hyderabad</h1>
              <p>Are you looking to build a successful career in the IT industry? Welcome to Hyderabad IT Trainings, a leading IT training institute in Hyderabad dedicated to bridging the gap between academic learning and real-world software engineering. Whether you are a college fresher, an engineering graduate, or a working professional aiming for a job domain switch, we offer job-ready classroom and online software courses training designed to meet current industry standards.

                At Hyderabad IT Trainings, we focus on practical learning rather than just theory. Our curriculum is regularly updated by software architects and IT experts to cover full-stack technologies, front-end frameworks, programming languages, and digital strategies. With hands-on lab sessions, live project work, and personal mentorship, we help you master the skills required to secure high-paying jobs in top IT companies across India.</p>
              
              <p>Are you looking to build a successful career in the IT industry? Welcome to Hyderabad IT Trainings, a leading IT training institute in Hyderabad dedicated to bridging the gap between academic learning and real-world software engineering. Whether you are a college fresher, an engineering graduate, or a working professional aiming for a job domain switch, we offer job-ready classroom and online software courses training designed to meet current industry standards.

At Hyderabad IT Trainings, we focus on practical learning rather than just theory. Our curriculum is regularly updated by software architects and IT experts to cover full-stack technologies, front-end frameworks, programming languages, and digital strategies. With hands-on lab sessions, live project work, and personal mentorship, we help you master the skills required to secure high-paying jobs in top IT companies across India.</p>
              </div>
            </div>
          </div>
      </section>
      <section className={`py-4 ${innerStyles.courses} ${innerStyles.bgmain}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1><span>Our</span> Courses</h1>
              </div>
          </div>
          <div className="row">
                {
                  data.map((item) => {
                    return (
                      <div key={item._id} className="col-md-4 mb-4">
                            <div className={`${innerStyles.bX_shadow}`}>
                                <h6 className="px-3 py-4">{item.cname}</h6>
                        </div>
                      </div>
                    )
                  }
                    ) }
            </div>
          </div>
      </section>
      <section className={`py-4 ${innerStyles.demo}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1><span>Demo</span> Video</h1>
              </div>
          </div>
          <div className="row">
                  {
                    data1.map((item) => {
                      return (
                        <div key={item._id} className="col-md-6 mb-4">
                              <div className={`${innerStyles.bX_shadow}`}>
                                  <iframe width="100%" height="420" src={item.dpath} ></iframe>
                                  <div className="py-2 d-flex justify-content-between bg-info">
                                      <div>
                                          <h6 className="px-3">Trainer Name: {item.tname}</h6>
                                      </div>
                                      <div>
                                          <h6 className="px-3">Course Name :{item.cname}</h6>
                                          </div>
                                      </div>
                          </div>
                        </div>
                      )
                    }
                      ) }
              </div>
          </div>
      </section>
      </>
  )
}

export default MainPage