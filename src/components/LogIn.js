import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import './LogIn.css'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="container">
            <h1>WELCOME</h1>
            <form onSubmit={handleSubmit}>
            <div className="container-Login">
            <div className="contain-Email">
                <label for="InputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="contain-Pass">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="submit-btn"><p className="submit-font">Submit</p></button>
            </div>
            </form>
        </div>
    )
}

export default LogIn;