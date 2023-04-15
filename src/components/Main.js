import { Link } from "react-router-dom"
import styles from '../styles/main.module.css'


const Main = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Main</h1>
      <div className={styles.container}>
        <a><Link to="/cadaster">Cadastro</Link></a>
        <a><Link to="/login">Login</Link></a>
      </div>
    </div>
  )
}

export default Main