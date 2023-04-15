import { useState } from "react"
import firebase from "../database/Firebase"
import styles from '../styles/cadaster.module.css'

const Cadaster = () => {
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleClick = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        await firebase.firestore().collection('users').doc(response.user.uid).set({
          nome: name,
          sobrenome: lastName
        })
      })
    window.location.href = '/home'
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cadaster</h1>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div>
            <label>Nome:</label>
            <br />
            <input type="text" onChange={(ev) => setName(ev.target.value)} />
          </div>
          <div>
            <label>Sobrenome:</label>
            <br />
            <input type="text" onChange={(ev) => setLastName(ev.target.value)} />
          </div>
          <div>
            <label>E-mail:</label>
            <br />
            <input type="email" onChange={(ev) => setEmail(ev.target.value)} />
          </div><div>
            <label>Senha:</label>
            <br />
            <input type="password" onChange={(ev) => setPassword(ev.target.value)} />
          </div>
          <button type="submit" onClick={handleClick}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Cadaster