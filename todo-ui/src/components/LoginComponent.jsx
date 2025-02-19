import React, { useState } from 'react'
import {  loginApiCall, saveUser, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        await loginApiCall(usernameOrEmail, password).then(response => {
            // Binary to ASCI = btoa 
            // const token = 'Basic ' + window.btoa(usernameOrEmail + ":" + password);
            
            // Store token in local storage
            const token = "Bearer " + response.data.tokenAccess;
            console.log(token);
            
            storeToken(token);
            saveUser(usernameOrEmail);
            navigation('/');
            window.location.reload(false);
            
        }).catch(error => console.log(error));
    }


  return (
    <>
        <main className='container mt-5'>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <h4 className="card-header">Login Form</h4>
                        <div className="card-body">
                            <form>
                                <div className='mb-3'>
                                    <label className=' form-label'>Username Or Email</label>
                                    <input type='text' className='form-control' onChange={e => setUsernameOrEmail(e.target.value)} placeholder='Enter username Or Email' value={usernameOrEmail} />
                                </div>
                                <div className='mb-3'>
                                    <label className=' form-label'>Password</label>
                                    <input type='password' className='form-control' onChange={e => setPassword(e.target.value)} placeholder='Enter password' value={password}/>
                                </div>
                                <div className='mb-3'>
                                    <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default LoginComponent