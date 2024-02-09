import React from 'react'
import '../Testing/testing.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Testing() {
    const [data, setData] = useState([{}]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try{
      const response = await fetch('http://localhost:5000/members')
      const jsonData = await response.json();
      setData(jsonData)
    }catch(error){
      console.log('Error', error);
    }
  }
  return (
    <div>
      <p><i>Connection Done</i></p>
      <h3>{data.message}</h3>
    </div>
  )
}
