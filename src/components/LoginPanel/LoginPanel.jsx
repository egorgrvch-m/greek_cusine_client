// import React, { useState } from "react";
// import cl from "./LoginPanel.module.css";
// import { NavLink, useLocation } from "react-router-dom";
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

// const LoginPanel = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleRegisterClick = () => {
//     setIsActive(true);
//   };

//   const handleLoginClick = () => {
//     setIsActive(false);
//   };

//   return (
//     <article className={cl.login_panel}>
//       <div
//         className={isActive ? `${cl.container} ${cl.active}` : cl.container}
//         id="container"
//       >
//         <div className={`${cl["form-container"]} ${cl["sign-up"]}`}>
//           <form>
//             <h1>Створити Акаунт</h1>
//             <input type="login" placeholder="Логін" />
//             <input type="password" placeholder="Пароль" />
//             <button>Зареєструватися</button>
//           </form>
//         </div>
//         <div className={`${cl["form-container"]} ${cl["sign-in"]}`}>
//           <form>
//             <h1>Вхід</h1>
//             <input type="login" placeholder="Логін" />
//             <input type="password" placeholder="Пароль" />
//             <a href="#">Забули пароль?</a>
//             <button>Увійти</button>
//           </form>
//         </div>
//         <div className={cl["toggle-container"]}>
//           <div className={cl["toggle"]}>
//             <div className={`${cl["toggle-panel"]} ${cl["toggle-left"]}`}>
//               <h1>Раді бачити вас знову!</h1>
//               <p>Увійдіть у профіль, щоб користуватися можливостями сайту.</p>
//               <button
//                 onClick={handleLoginClick}
//                 className={cl.hidden}
//                 id="login"
//               >
//                 {" "}
//                 <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
//               </button>
//             </div>
//             <div className={`${cl["toggle-panel"]} ${cl["toggle-right"]}`}>
//               <h1>Вітаю!</h1>
//               <p>Зареєструйтеся, щоб користуватися можливостями сайту.</p>
//               <button
//                 onClick={handleRegisterClick}
//                 className={cl.hidden}
//                 id="register"
//               >
//                 <NavLink to={REGISTRATION_ROUTE}>Реєстрація</NavLink>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default LoginPanel;
