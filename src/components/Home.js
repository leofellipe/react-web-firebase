import { useState } from "react"
import {Link} from 'react-router-dom'
import firebase from "../database/Firebase"

const Home = () => {
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  
  firebase.auth().onAuthStateChanged(async (user) => {
    if(user) {
      const uid = user.uid

      await firebase.firestore().collection('users').doc(uid).get()
        .then((response) => {
          setName(response.data().nome)
          setLastName(response.data().sobrenome)
        })
    } 
  })  
  return(
    <div>
      <h1>Home</h1>
      <p>{name}</p>
      <p>{lastName}</p>
      <Link to="/"/>
    </div>
  )
}

export default Home