import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import './Logout.css'

const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <div className="contain-logout">
                <button onClick={() => firebaseConfig.auth().signOut()} className="logout-btn"><p className="logout-text">Logout</p></button>
            </div>
        </div>
    )
}

export default DashBoard;