import React from 'react'
import { useState } from 'react'
const Login = () => {

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
          <input name='userName' onChange={changeHandler} />
          <input name='password' onChange={changeHandler} />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
