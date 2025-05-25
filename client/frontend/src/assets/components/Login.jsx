
import "bootstrap/dist/css/bootstrap.min.css";
import React, { use } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    function goTo(path, userData){
        navigate(path);
    }

    async function loggingin(e){
        e.preventDefault();
        setLoading(true);
        setError('');

        try{

            const response = await axios.post('http://127.0.0.1:8000/api/login',{
                email,
                password
            },{
            headers: {
                'Accept': 'application/json'
            }
        });
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            if(response.data.success){
                goTo('/dashboard')
            }

        }catch(error){

            setLoading(false);
            console.log(error)
            if (error.response) {
                console.log(error.response.data);
                setError(error.response.data.message || 'Wrong username or password');
            } else {
                setError('Something went wrong');
            }

        }
    }
    return(
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
               

                <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                    <form onSubmit={loggingin}>
                        <h2 className="text-center mb-4">Login</h2>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            
                            <input 
                                className="form-control"
                                id="email"
                                type="email" 
                                name="email"
                                value={email}
                                disabled={loading}
                                onChange={(e) => setEmail(e.target.value)}
                               
                            />  
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>

                            <input
                                className="form-control"
                                id="password"
                                type="password" 
                                name="password"
                                value={password}
                                disabled={loading}
                                onChange={(e) => setPassword(e.target.value)}
                               
                            />
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'loggingin....' : 'Login'} </button>
                        </div>
                    </form>

                     {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div>  
                     )}
                </div>
            </div>

        </>
    )
}

export default Login;