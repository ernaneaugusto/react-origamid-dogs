import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/Shared/ProtectedRoute";
import User from "./Components/User/User";
import UserStats from "./Components/User/UserStats";
// deve ser utilizado para envolver toda parte da aplicacao que vai compartilhar um contexto
import { UserStorage } from "./Contexts/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <ProtectedRoute path="estatisticas/*" element={<UserStats />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
