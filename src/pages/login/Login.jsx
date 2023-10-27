import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      return;
    }

    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(""); // Reinicia el estado de error
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.code === "auth/network-request-failed") {
          setError("Error de red. Verifica tu conexión a Internet.");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="login">
      {isLoading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar Sesión</button>
          {error && <span className="error-message">{error}</span>}
        </form>
      )}
    </div>
  );
};

export default Login;