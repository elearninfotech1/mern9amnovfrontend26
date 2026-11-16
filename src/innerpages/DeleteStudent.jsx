import React,{useState,useEffect} from 'react'
import innerstyles from './innerstyles.module.css'
import axios from 'axios';
const DeleteStudent = () => {
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

  const deleteStudentData = (sid) => {
    axios.delete(`http://localhost:5000/student/${sid}`)
      .then((res) => {
        alert(res.data.message);        
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
                          <h2>Delete Student</h2>
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
                              <button className='btn btn-danger' onClick={() => deleteStudentData(item._id)}>Delete</button>
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

export default DeleteStudent