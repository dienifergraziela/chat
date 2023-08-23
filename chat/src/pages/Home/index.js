import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo-moon_chat.png";
import Circles from "../../assets/images/circles.png";
import "../../assets/css/App.css";

const Home = () => {
  return (
    <div>
     
      <div class="card mb-3" id="nick">
        <div class="row g-0">
          <div class="col-md-8" id="nickAzul">
            <img src={Logo} />

          </div>

          <div class="col-md-4" id="nickBranco">
            <div>
              <img src={Circles} />
            </div>
            <div id="bem-vindo">
              <p>bem-vindo(a) ao
                moon chat</p>
            </div>
            <div id="nick-nome">
              <p>digite seu nome♥</p>
              <input type="text" name="nick" placeholder="aqui..." />
              <Link to="/criarsala">
                <button class="e107_52">Entrar</button>
              </Link>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export { Home };