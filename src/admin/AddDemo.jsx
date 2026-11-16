import React,{useState} from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios'

const AddDemo = () => {
  const [data, setData] = useState({
       tname:'',
        cname: '',
        dpath: ''
    });

    const { tname, cname, dpath } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/demo`, data)
            .then((res) => {
                alert(res.data.message);
                setData({
                  tname: '',
                  cname: '',
                  dpath:''
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
                                <input type="text" name="tname" value={tname} onChange={changeHandler} className='form-control my-4' placeholder='Trainer Name' />
                            </div>
                            <div>
                                <input type="text" name="cname" value={cname} onChange={changeHandler} className='form-control my-4' placeholder='Course Name' />
                            </div>
                            <div>
                                <textarea type="text" name="dpath" value={dpath} onChange={changeHandler} className='form-control my-4' placeholder='Demo Path'></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" className='btn btn-primary'>Add Demo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AddDemo