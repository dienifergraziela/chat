import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/App.css";

const CriarSala = () => {
  return (
    <div>

      <div class="e101_22">
        <div class="e101_26">
          <div class="e107_82">
            <div class="ei107_82_107_65"></div>
          </div>
          <div class="e106_50"></div><input class="e107_57" placeholder="nome da sala" />
          <div class="e107_53"></div>
          <Link to="/chat">
            <span class="e107_52">criar</span>
          </Link>
          <div class="e107_54"></div><Link to="/chat"><span class="e107_56">salas</span></Link><span class="e107_55">criar sala</span>
          <Link to="/chat">
            <span class="e112_34">participe de uma
              sala existente</span>
          </Link>

          <div class="e112_23"></div>
          <div class="e112_24"></div>
          <div class="e112_28">
            <div class="e112_29"></div><span class="e112_32">ou</span>
          </div>
          <div class="e114_133">
            <div class="e114_134"></div>
            <div class="e114_135"></div>
          </div>
        </div>

      </div>

    </div>

  );
};

export { CriarSala };
