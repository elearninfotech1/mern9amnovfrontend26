import React,{useState,useEffect} from 'react'
import innerstyles from './innerStyles.module.css'
import axios from 'axios';
const Registration = () => {
    const [data, setData] = useState({
        cname: '',
        tmode:'',
        name:'',
        email:'',
        phone: '',
        subject:'',
        message:''
    });

    const { cname, tmode, name, email, phone, subject, message } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/creg`, data)
            .then((res) => {
                alert(res.data.message);
                setData({
                    cname: '',
                    tmode: '',
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
  
  return (
      <>
      <section className={innerstyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Registration</h2>
                    </div>
                </div>
            </div>
          </section>
          <section className={`py-4`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                          <form className={innerstyles.formbg} onSubmit={submitHandler}>
                              <div className="row">
                                  <div className="col-md-6">
                                      <input type="text" name="cname" value={cname} onChange={changeHandler} className='form-control my-3' placeholder='Course Name' />
                                  </div>
                                  <div className="col-md-6">
                                      <input type="text" name="tmode" value={tmode} onChange={changeHandler} className='form-control my-3' placeholder='Training Mode' />
                                  </div>
                              </div>
                             <div className="row">
                                  <div className="col-md-6">
                                <input type="text" name="name" value={name} onChange={changeHandler} className='form-control my-3' placeholder='Name' />
                                  </div>
                                    <div className="col-md-6">
                                <input type="email" name="email" value={email} onChange={changeHandler} className='form-control my-3' placeholder='Email' />
                                  </div>
                                </div>
                              <div className="row">
                                  <div className="col-md-6">
                                <input type="text" name="phone" value={phone} onChange={changeHandler} className='form-control my-3' placeholder='Phone' />
                                  </div>
                                  <div className="col-md-6">
                                <input type="text" name="subject" value={subject} onChange={changeHandler} className='form-control my-3' placeholder='Subject' />
                            </div>
                            <div className="col-md-12">
                                <textarea name="message" value={message} onChange={changeHandler} className='form-control my-3' placeholder='Message'></textarea>
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className='btn btn-primary'>Register</button>
                                  </div>
                            </div>
                          </form>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Registration
