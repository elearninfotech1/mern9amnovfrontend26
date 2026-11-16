import React,{useState,useEffect} from 'react'
import axios from 'axios';
import adminstyles from './admin.module.css'
const DeleteCourse = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        axios.get(`http://localhost:5000/course`)
          .then((res) => {
            setData(res.data);
          })
          
          .catch((err) => {
            console.log(err);
          });
      });
    
    const deleteCourseData = (cid) => { 
        axios.delete(`http://localhost:5000/course/${cid}`)
      .then((res) => {
        alert(res.data.message);        
      })
      .catch((err) => {
        console.log(err);
      });
    }
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
                                  <th scope="col">Course Description</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                      {
                      data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item.cname}</td>
                            <td>{item.cdesc}</td>
                            <td>
                              <button className='btn btn-danger' onClick={() => deleteCourseData(item._id)}>Delete</button>
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
  )
}

export default DeleteCourse