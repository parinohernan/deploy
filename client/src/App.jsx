//import { useState } from "react";
import { LandingPage, Home, Form, Details } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import About from "./views/About/About";
import Error from "./views/Error/Error";
import axios from "axios";
axios.defaults.baseURL = "https://deploy-production-423d.up.railway.app/";

function App() {
  const location = useLocation();

  return (
    <div className="ppal">
      {/* <img
        src="/images/fondo-app.jpg"
        alt="Background"
        className="background-image"
      /> */}
      <Provider store={store}>
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          {/* era ruta es para el manejo de errores */}
          <Route path="/error404" element={<Error />} />
          {/* Ruta "fallback" para cualquier otra ruta no coincidente */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
