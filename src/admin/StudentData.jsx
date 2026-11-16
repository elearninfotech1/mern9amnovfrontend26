import React,{useState,useEffect} from 'react'
import axios from 'axios';
import adminstyles from './admin.module.css'
const StudentData = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        axios.get(`http://localhost:5000/creg`)
          .then((res) => {
            setData(res.data);
          })
          
          .catch((err) => {
            console.log(err);
          });
      });
  return (
    <section>
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
                                  <th scope="col">Course Name</th>
                                  <th scope="col">Training Mode</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Phone</th>
                                  <th scope="col">Subject</th>
                                  <th scope='col'>Message</th>
                                </tr>
                              </thead>
                              <tbody>
                      {
                      data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item.cname}</td>
                            <td>{item.tmode}</td>                           
                             <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>

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
  )
}

export default StudentData