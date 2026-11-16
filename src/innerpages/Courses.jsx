import React,{useState,useEffect} from 'react'
import innerstyles from './innerstyles.module.css'
import axios from 'axios';
import CustomFetch from './CustomFetch';
import { apiRootPath } from '../App';
const Courses = () => {
   const data = CustomFetch(`${apiRootPath}/course`);  
  
  return (
      <>
      <section className={innerstyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Courses</h2>
                    </div>
                </div>
            </div>
          </section>
          <section className={`py-4`}>
            <div className="container">
                <div className="row">
                    {
                      data.map((item) => {
                        return (
                          <div key={item._id} className="col-md-4 mb-4">
                                <div className={`${innerstyles.bX_shadow}`}>
                                    <h6 className="px-3 py-4">{item.cname}</h6>
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

export default Courses