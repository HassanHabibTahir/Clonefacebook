import { Button } from '@material-ui/core'
import React from 'react'
import './css/login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../Stateprovider'
import { actionTypes } from '../reducer/reducer'

const Login = () => {
  const [state, dispatch] = useStateValue();
  const SignIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider)
      .then((res) => {

        dispatch({
          type: actionTypes.SET_USER,
          user: res.user
        })

        // console.log(res.user, "this is the res")
      }).catch((err) => alert(err.message))
  }

  return (
    <div>
      <div className="login" >
        <div className="login_logo" >
          <img src="https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png" width="200" height="200" />
          <h1 style={{ color: "#1178F2" }}>facebook</h1>
        </div>
        <Button className="btn_login" type="submit" onClick={SignIn}>Sign in</Button>
      </div>
    </div>
  )
}

export default Login
