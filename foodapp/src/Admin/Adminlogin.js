import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Adminlogin() {
  const navigate = useNavigate();
  const [usrname, setusrname] = useState('');
  const [pswd, setpswd] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Added state for showing/hiding password

  let username = 'admin';
  let password = 'admin@123';

  const myfunc = (e) => {
    e.preventDefault();

    if (username === usrname && password === pswd) {
      console.log('success');
      alert('Login successfully');
      navigate('/adminhome');
    } else if (username !== usrname) {
      alert('Invalid Username');
    } else if (password !== pswd) {
      alert('Invalid password');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      {/* <Link to='/home'><p id='lnk'>Homepage</p></Link> */}
      <form onSubmit={myfunc}>
        <div class='form'>
          <h3 id='chh'>Admin Login</h3>
          <div id='usrnme'>
            {/* <h5 className='fw-bold'>Username</h5> */}
          </div>
          <div>
            <input
              type='text'
              id='inp1'
              className='form-control'
              placeholder='Username'
              name='username'
              value={usrname}
              onChange={(b) => {
                setusrname(b.target.value);
              }}
            ></input>
          </div>
          <div id='pswd'>
            {/* <h5 className='fw-bold'>Password</h5> */}
          </div>
          <div>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
              id='inp2'
              className='form-control'
              placeholder='Password'
              name='password'
              value={pswd}
              onChange={(b) => {
                setpswd(b.target.value);
              }}
            ></input>
          </div>
          <div>
            {/* <label>
              <input
                type='checkbox'
                name='showPassword'
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state
              />
              Show Password
            </label> */}
          </div>
          <div>
            <button type='submit' id='btn1' className='btn btn-danger'>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Adminlogin;
