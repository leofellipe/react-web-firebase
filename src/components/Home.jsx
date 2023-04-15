import { useState } from "react"
import firebase from "../database/Firebase"
import styles from '../styles/home.module.css'

const Home = () => {
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid

      await firebase.firestore().collection('users').doc(uid).get()
        .then((response) => {
          setName(response.data().nome)
          setLastName(response.data().sobrenome)
        })
    }
  })
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <p><span>Nome:</span> {name}</p>
          <p style={{ marginBottom: '18px' }}><span>Sobrenome:</span> {lastName}</p>
        </div>
      </div>
    </div>
  )
}

export default Home