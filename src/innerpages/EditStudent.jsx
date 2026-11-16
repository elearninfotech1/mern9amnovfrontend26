import React,{useState,useEffect} from 'react'
import innerstyles from './innerstyles.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const EditStudent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/student`)
      .then((res) => {
        setData(res.data);
      })
      
      .catch((err) => {
        console.log(err);
      });
  });


  
  return (
      <>
          <section className={innerstyles.bread}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <h2>Edit Student</h2>
                      </div>
                  </div>
              </div>
          </section>
          <section className={`py-5`}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                           <div
                            className="table-responsive"
                           >
                            <table
                              className="table table-bordered"
                            >
                              <thead className="table-dark">
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Phone</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                      {
                      data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                              <Link to={`/studentedit/${item._id}`}>
                                <button className='btn btn-info'>Edit</button>
                                </Link>
                            </td>
                          </tr>
                        )
                      }
                        ) }
                              </tbody>
                            </table>
                           </div>
                           
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default EditStudent