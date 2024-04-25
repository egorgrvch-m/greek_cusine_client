import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./components/Routers/AppRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import { check } from "./http/userAPI.js";
import Loader from "./components/Loader/Loader.jsx";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
