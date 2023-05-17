import './AuthNavigation.css'
import {Link} from "react-router-dom";

function AuthNavigation() {
  return (
    <div className="auth">
      <Link className="auth__signup" to="/signup">Регистрация</Link>
      <Link className="auth__signin" to="/signin">Войти</Link>
    </div>
  );
}

export default AuthNavigation;