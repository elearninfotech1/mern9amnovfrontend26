import React, { useState } from 'react'
import innerstyles from './innerStyles.module.css'
import axios from 'axios';
const ContactUs = () => {
  const [data, setData] = useState({
        name:'',
        email:'',
        phone: '',
        subject:'',
        message:''
  })

  const { name, email, phone, subject, message } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/contact`, data)
      .then((res) => {
        alert(res.data.message);
        setData({
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
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                </div>
              </section>
              <section className={`py-4`}>
              <div className="container">
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className={innerstyles.bX_shadow}>
                      <div className="p-3">
                        <h5 className="text-uppercase mb-4">Phone Number</h5>
                        <p>+91 9133102210</p>
                        <p>+91 8899665588</p>
                      </div>
                    </div>
            </div>
            <div className="col-md-4">
                    <div className={innerstyles.bX_shadow}>
                      <div className="p-3">
                        <h5 className="text-uppercase mb-4">Email Address</h5>
                        <p>info@hyderabadittrainings.com</p>
                        <p>hr@hyderabadittrainings.com</p>
                      </div>
                    </div>
            </div>
            
            <div className="col-md-4">
                    <div className={innerstyles.bX_shadow}>
                      <div className="p-3">
                        <h5 className="text-uppercase mb-4">Contact Address</h5>
                        <p>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
                      </div>
                    </div>
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
                                    <button type="submit" className='btn btn-primary'>Contact Us</button>
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

export default ContactUs
