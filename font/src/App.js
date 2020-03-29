import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearList from './components/BearList'
import InputForm from './components/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from './redux/store'
import { bindActionCreators } from 'redux';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
axios.defaults.withCredentials = true
export default () => {
  const [loading, setLoading] = useState(false);
  const auth = useSelector(state => state.Auth)
  const actions = bindActionCreators(AuthActions, useDispatch())
  useEffect(() => {
    actions.getLoginStatus().then(res => setLoading(false))
  }, [])
  if (loading) {
    return 'loading...'
  }
  if (!auth.accessToken && !auth.psuInfo) {
    console.log(auth)
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
  return (
    <div>
      <h2>Bears</h2>
      <BearList />
      <InputForm />
      <Button variant="outline-danger" onClick={() => actions.logout()}>Logout</Button>
    </div>
  )
}
