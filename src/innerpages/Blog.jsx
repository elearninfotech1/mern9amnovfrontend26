import React,{useState,useEffect} from 'react'
import innerstyles from './innerstyles.module.css'
import axios from 'axios';
const Blog = () => {
    const [data, setData] = useState([]);
     useEffect(() => {
    axios.get(`http://localhost:5000/blog`)
      .then((res) => {
        setData(res.data);
      })
      
      .catch((err) => {
        console.log(err);
      });

  }, []);
  
  return (
      <>
      <section className={innerstyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Blog</h2>
                    </div>
                </div>
            </div>
          </section>
          <section className={`py-4`}>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </section>
      </>
  )
}

export default Blog