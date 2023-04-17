import { Link } from "react-router-dom"
import styles from '../styles/main.module.css'


const Main = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Main</h1>
      <div className={styles.container}>
        <Link to="/register"><p>Cadastro</p></Link>
        <Link to="/login"><p>Login</p></Link>
      </div>
    </div>
  )
}

export default Main