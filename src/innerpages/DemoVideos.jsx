import React,{useState,useEffect} from 'react'
import innerstyles from './innerStyles.module.css'
import axios from 'axios';
import CustomFetch from './CustomFetch';
import { apiRootPath } from '../App';
const DemoVideos = () => {

  const data = CustomFetch(`${apiRootPath}/demo`);  
  return (
      <>
      <section className={innerstyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Demo Videos</h2>
                    </div>
                </div>
            </div>
          </section>
          <section className={`py-5`}>
            <div className="container">
                <div className="row">
                    {
                      data.map((item) => {
                        return (
                          <div key={item._id} className="col-md-6 mb-4">
                                <div className={`${innerstyles.bX_shadow}`}>
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

export default DemoVideos
