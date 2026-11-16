import React,{useState} from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios'

const AddCourse = () => {
    const [data, setData] = useState({
        cname: '',
        cdesc: ''
    });

    const { cname, cdesc } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/course`, data)
            .then((res) => {
                alert(res.data.message);
                setData({
                    cname: '',
                    cdesc: ''
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

  return (      
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className={adminstyles.formbg} onSubmit={submitHandler}>
                            <div>
                                <input type="text" name="cname" value={cname} onChange={changeHandler} className='form-control my-4' placeholder='Course Name' />
                            </div>
                            <div>
                                <textarea type="text" name="cdesc" value={cdesc} onChange={changeHandler} className='form-control my-4' placeholder='Course Description'></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" className='btn btn-primary'>Add Course</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AddCourse