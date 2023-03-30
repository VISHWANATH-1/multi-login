import React, { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState(false);
  const [userPassword, setUserPassword] = useState (false);
  const handleSubmit = (e) => {
    if(name.length<3 || password.length<6){
        alert ("Enter Valid Item")  
    }
    e.preventDefault();
  };
  const nameHandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserName(true);
    } else {
      setUserName(false);
    }
    setName(item);
  };
  const passwordHandler = (e) => {
    let item = e.target.value;
    if (item.length < 6) {
      setUserPassword(true);
    } else {
      setUserPassword(false);
    }
    setPassword(item);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="register">
        <label>Name</label>
        <input type="text"  onChange={nameHandler} />{" "}
        {userName ? <span>Invalid user</span> : ""}
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" onChange={passwordHandler} />
        {userPassword ? <span>Invalid Password</span> : ""}
        <button className='butn' type="submit">Register</button>
      </form>
      <button
        className="link-button"
        onClick={() => props.onFormSwitch("login")}
      >
        Already Have Account! Login
      </button>
    </div>
  );
};

export default Register;
