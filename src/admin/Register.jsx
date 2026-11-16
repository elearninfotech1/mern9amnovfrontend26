import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({
        name:'',
        email: '',
        password: '',
        phone:'',
        address:''
    });
    const navigate = useNavigate();

    const { name, email, password, phone, address } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            phone:'',
            address:''
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register", data)
        .then((res) => {
            alert(res.data.message);
            resetData();
            navigate('/admin');
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
                            <h2>Admin Register</h2>
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
                                    <input type="text" name="name" value={name} onChange={changeHandler} className='form-control my-4' placeholder='Name' />
                              </div> 
                              
                                <div>
                                    <input type="email" name="email" value={email} onChange={changeHandler} className='form-control my-4' placeholder='UserName' />
                                </div>
                                <div>
                                    <input type="password" name="password" value={password} onChange={changeHandler} className='form-control my-4' placeholder='Password' />
                              </div>
                              
                              <div>
                                    <input type="text" name="phone" value={phone} onChange={changeHandler} className='form-control my-4' placeholder='Phone' />
                              </div>

                              <div>
                                    <input type="text" name="address" value={address} onChange={changeHandler} className='form-control my-4' placeholder='Address' />
                              </div>

                              <div>
                                  <button className='btn btn-danger me-3' onClick={resetData}>Cancel</button>
                                    <button type="submit" className='btn btn-primary'>Register</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Register