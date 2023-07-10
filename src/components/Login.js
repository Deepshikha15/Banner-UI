import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
 
    // useEffect(()=>{
    //     if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
    //         navigate("/dashboard");
    //     }
    //     console.log(localStorage.getItem('token'))
    // },[])
 
    const loginAction = (e) => {
        console.log("hellooo");
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            name:name,
            password:password,
        }
        axios.post('http://localhost:4000/api/auth/login', payload)
        .then((r) => {
            setIsSubmitting(false)
            //localStorage.setItem('token', r.data.token)
            navigate("/dashboard");
        })
        .catch((e) => {
            setIsSubmitting(false)
            // if (e.response.data.errors != undefined) {
            //     setValidationErrors(e.response.data.errors);
            // }
            // if (e.response.data.error != undefined) {
            //     setValidationErrors(e.response.data.error);
            // }
        });
    }
  return (
    <div className="row justify-content-md-center mt-5">
    <div className="col-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title mb-4">Sign In</h5>
                <form onSubmit={(e)=>{loginAction(e)}}>
                    {Object.keys(validationErrors).length != 0 &&
                         <p className='text-center '><small className='text-danger'>Incorrect Name or Password</small></p>
                    }
                    
                    <div className="mb-3">
                        <label 
                            htmlFor="name"
                            className="form-label">
                                Name
                        </label>
                        <input 
                            type="name"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="password"
                            className="form-label">Password
                        </label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button 
                            disabled={isSubmitting}
                            type="submit"
                            className="btn btn-primary btn-block">Login</button>
                        <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}