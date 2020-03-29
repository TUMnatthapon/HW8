import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';

const LoginForm = (props) => {
    const [facebookLink, setFacebookLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const getFacebookLink = async () => {
        const res = await axios.get(`http://localhost/api/auth/facebook`)
        console.log(res.data)
        setFacebookLink(res.data);
    }
    useEffect(() => {
        getFacebookLink();
    })
    const LoginPSU = (e) => {
        e.preventDefault();
        actions.loginPSU(username, password);
    }
    return (
        <center>
            <div>
                <div>
                    <div>
                        <h2>Facebook Login</h2>
                        <Button href={facebookLink} >Login</Button>
                        <div style={{ marginTop: '2rem' }}>
                            <h2>PSU Login</h2>
                            <label>Username</label>
                            <input style={{ marginLeft: '1rem', width: '12rem' }} type="text" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)} />
                            <div>
                                <label>Password</label>
                                <input style={{ marginLeft: '1.3rem', width: '12rem' }} type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                <div>
                                    <Button onClick={LoginPSU}>Login</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}
export default LoginForm;