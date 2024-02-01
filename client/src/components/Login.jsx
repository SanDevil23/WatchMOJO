import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
    console.log(form);
  }
  const submitHandler = () => {
    console.log('submitted');
  }

  return (

    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input name='userName' placeholder='enter userName' onChange={changeHandler} />
          <input name='password' placeholder='enter password' onChange={changeHandler} />
          <button type='submit'>Login</button>
          <button onClick={() => navigator("/register")}>new user? Register</button>
        </form>
      </div>
    </div>
  )
}

export default Login
