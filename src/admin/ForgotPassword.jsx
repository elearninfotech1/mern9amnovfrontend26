import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const [data, setData] = useState({
        email: ''
    });
    const navigate = useNavigate();
    const { email } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetData = () => {
            setData({
                email: ''
            })
        }
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/forgotpassword`, data)
            .then((res) => { 
                alert(res.data.message);
                resetData();
            })
            .catch((err) => {
                console.log(err);
            })
    }

  return (
     <>
        <section className={adminstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Forgot Password</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <form className={adminstyles.formbg} onSubmit={submitHandler}>                                
                                <div>
                                    <input type="email" name="email" value={email} onChange={changeHandler} className='form-control my-4' placeholder='UserName' />
                                </div>                               
                              <div>
                                  <button className='btn btn-danger me-3' onClick={resetData}>Cancel</button>
                                    <button type="submit" className='btn btn-primary'>Forgot Password</button>
                              </div>                             
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default ForgotPassword