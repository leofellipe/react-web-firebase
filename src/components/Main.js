import { Link } from "react-router-dom"

const Main = () => {
  return(
    <div>
      <h1>Main</h1>
      <Link to="/cadaster">Cadastro</Link>
      <Link to="/login">Login</Link>
      <Link to="/home">Home</Link>
    </div>
  )
}

export default Main