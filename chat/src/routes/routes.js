import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, CriarSala, Conversa, Chat} from "../pages";



export const Rota = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/criarsala" element={<CriarSala/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/conversa" element={<Conversa/>}/>
            </Routes>
        </BrowserRouter>
    )
}