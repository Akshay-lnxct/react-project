import React , {useState} from "react";
import "../signup.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = () => {
    axios.post('http://127.0.0.1:8000/register', { username, password, email })
      .then(response => console.log(response))
      .catch(error => console.error(error));
    navigate("/")
  }


  return (
    <div>
      <form className="my-5">
        <h1 id="form-heading">Register</h1>
        <div id="input-wrapper">
          <div>
            <input
              className="input-box"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <input
              className="input-box"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="email"
            />
          </div>
          <div>
            <input
              className="input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="password"
            />
          </div>
          <div>
            <input
              className="input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="cpassword"
              placeholder="conform password"
            />
          </div>
          
          {/* <input id="btn-submit" type="submit" value="Register" /> */}

          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
    
        </div>
      </form>
    </div>
  );
}
