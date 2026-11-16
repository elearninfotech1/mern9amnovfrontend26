import React,{useState} from 'react'
import innerstyles from './innerstyles.module.css'
import axios from 'axios';
const AddStudent = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const { name, email, phone, address } = data;
    
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(data);
        axios.post(`http://localhost:5000/student`, data)
            .then((res) => {
                alert(res.data.message);
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    address: ''
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
                          <h2>Add Student</h2>
                      </div>
                  </div>
              </div>
          </section>
          <section className={`py-5`}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 mx-auto">
                          <form className={innerstyles.formbg} onSubmit={submitHandler}>
                              <div>
                                  <input type="text" name="name" value={name} onChange={changeHandler} className='form-control my-4' placeholder='Name' />
                              </div>
                              <div>
                                  <input type="email" name="email" value={email} onChange={changeHandler} className='form-control my-4' placeholder='Email' />
                              </div>
                              <div>
                                  <input type="text" name="phone" value={phone} onChange={changeHandler} className='form-control my-4' placeholder='Phone' />
                              </div>
                              <div>
                                  <textarea name="address" value={address} onChange={changeHandler} className='form-control my-4' placeholder='Address'></textarea>
                              </div>
                              <div>
                                  <button type="submit" className='btn btn-primary'>Add Student</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default AddStudent