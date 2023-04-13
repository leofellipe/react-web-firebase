import { useState } from "react"
import firebase from "../database/Firebase"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    window.location.href = '/home'
  }

  return(
    <div>
      <h1>Login</h1>
      <div>
        <label>E-mail:</label><br />
        <input type="text" onChange={(ev) => setEmail(ev.target.value)} />
      </div>
      <div>
        <label>Senha:</label><br />
        <input type="password" onChange={(ev) => setPassword(ev.target.value)} />
      </div>
      <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login