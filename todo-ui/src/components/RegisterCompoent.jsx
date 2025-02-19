import React, { useState } from 'react'
import { registerApi } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

export default function RegisterCompoent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();
        const registerData = {username, email, password};
        registerApi(registerData).then(res => {
            console.log("Registeration Successfull");
            nav('/');
        }).catch(err => {
            console.log(err);
        });

    }

  return (
    <>
        <main className='container mt-3'>
            <div className="row">
                <div className=" offset-md-3 offset-lg-4 col-md-6 col-lg-4 ">
                    <div className="card bg-secondary-subtle">
                        <h4 className="card-header">Registeration Form</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label> Username</label>
                                    <input type="text" className=' form-control' value={username} 
                                    onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label> Email</label>
                                    <input type="email" className=' form-control' value={email} 
                                    onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label> Password</label>
                                    <input type='password' className=' form-control' value={password} 
                                    onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <button className='btn btn-primary' onClick={registerHandler}>Register</button>
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
