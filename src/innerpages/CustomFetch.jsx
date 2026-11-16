import axios from 'axios';
import React,{ useEffect, useState }  from 'react'

const CustomFetch = (apiPath) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get(apiPath)
      .then((res) => {
        setData(res.data);
      })      
      .catch((err) => {
        console.log(err);
      });

  }, []);
  return data
}

export default CustomFetch