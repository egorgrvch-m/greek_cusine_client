import React, { useState, useContext } from "react";
import cl from "./Auth.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts.js";
import { loginFu, registration } from "../http/userAPI.js";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const click = async (e) => {
    try {
      e.preventDefault();
      let data;
      if (isLogin) {
        data = await loginFu(login, password);
      } else {
        data = await registration(login, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <article className={cl.login_panel}>
      <div
        className={isActive ? `${cl.container} ${cl.active}` : cl.container}
        id="container"
      >
        <div className={`${cl["form-container"]} ${cl["sign-up"]}`}>
          <form>
            <h1>Створити Акаунт</h1>
            <input
              type="login"
              placeholder="Логін"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={click}>Зареєструватися</button>
          </form>
        </div>
        <div className={`${cl["form-container"]} ${cl["sign-in"]}`}>
          <form>
            <h1>Вхід</h1>
            <input
              type="login"
              placeholder="Логін"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={click}>Увійти</button>
          </form>
        </div>
        <div className={cl["toggle-container"]}>
          <div className={cl["toggle"]}>
            <div className={`${cl["toggle-panel"]} ${cl["toggle-left"]}`}>
              <h1>Раді бачити вас знову!</h1>
              <p>Увійдіть у профіль, щоб користуватися можливостями сайту.</p>
              <NavLink to={LOGIN_ROUTE}>
                <button
                  onClick={handleLoginClick}
                  className={cl.hidden}
                  id="login"
                >
                  Вхід
                </button>
              </NavLink>
            </div>
            <div className={`${cl["toggle-panel"]} ${cl["toggle-right"]}`}>
              <h1>Вітаю!</h1>
              <p>Зареєструйтеся, щоб користуватися можливостями сайту.</p>
              <NavLink to={REGISTRATION_ROUTE}>
                <button
                  onClick={handleRegisterClick}
                  className={cl.hidden}
                  id="register"
                >
                  Реєстрація
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export default Auth;
