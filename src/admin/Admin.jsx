import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetData = () => {
            setData({
                email: '',
                password: ''
            })
        }
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/login`, data)
        .then((res) => {
            if(res.data.message === "Login Successfull")
            {
                navigate('/admindashboard');
            }
            else
            {
                alert(res.data.message);
            }
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
                            <h2>Admin Login</h2>
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
                                    <input type="password" name="password" value={password} onChange={changeHandler} className='form-control my-4' placeholder='Password' />
                                </div>
                              <div>
                                  <button className='btn btn-danger me-3' onClick={resetData}>Cancel</button>
                                    <button type="submit" className='btn btn-primary'>Login</button>
                              </div>
                              <div className="d-flex justify-content-between mt-3">
                                  <div className='mt-3 text-end'><Link to="/forgotpassword">Forgot Password?</Link></div>
                                  
                                  <div className='mt-3 text-end'>Not a member? <Link to="/register">Register</Link></div>                                 
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Admin