import React from 'react';
import { Link } from 'react-router-dom';
import Messaging from "../../assets/images/Messaging-bro.png";

const Chat = () => {
    return (
        <div>

            <div class="card mb-3" id="salas">
                <div class="row g-0">
                    <div class="col-md-8" id="sala">
                        <div class="col-md-12" id="menu">
                            <p>chats</p>
                            <a href="./index.html"><img src="./imagens/🦆 icon _home 2_.png" alt="" />
                            </a>
                            <a href="./criarSala.html"><img src="./imagens/icons_plus.jpeg" alt="" /></a>

                        </div>
                        <div class="col-md-12" id="pesquisar">
                            <input type="text" name="pesquisar" placeholder="⠀⠀⠀pesquisar..." />
                        </div>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src={Perfil} />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src="./imagens/Ellipse 18.png" alt="" />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src="./imagens/Ellipse 18.png" alt="" />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src="./imagens/Ellipse 18.png" alt="" />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src="./imagens/Ellipse 18.png" alt="" />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>
                        <Link to="/conversa">
                            <div class="col-md-12" id="conversa">
                                <img src="./imagens/Ellipse 18.png" alt="" />
                                <p>family </p>
                                <p>ciclano: sla</p>
                                <p>7:59</p>
                            </div>
                        </Link>



                    </div>

                    <div class="col-md-4" id="chats">
                        <img src={Messaging} />
                        <p>crie e participe de salas através do moon chat ⠀boa noite</p>
                        <p>não protegido com a criptografia de ponto a ponto</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Chat }
