import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    navigate('/tabs');
  };

  return (
    <div className="container card p-3 mt-2 register-container">
      <form
        onSubmit={onSubmit}
      >
        <h1 className='text-center'>Registration Form</h1>
        <div className='form-group'>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' required className='form-control' autoComplete="on" onChange={onChange}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' required className='form-control' autoComplete="on" onChange={onChange}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' required className='form-control' autoComplete="on" onChange={onChange}></input>
        </div>
        <button type='submit' className='btn btn-primary m-1'>Register</button>
        {/* <button type='button' className='btn m-1'onClick={props.click} style={btnStyle}>{btnText}</button> */}
        {/* <button  type='submit' className='btn btn-danger m-1 w-100' >Log in</button> */}
      </form>

    </div>
  )
}
