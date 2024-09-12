import './index.scss'
import NitroCard from "../../components/nitroCard";

export default function Nitro() {
    return (
        <div className="pagina-nitro">
            <h1>Vantagens Nitro Populares</h1>

            <div className="fileira">
            <NitroCard titulo="De clipes a fotos, compartilhe à vontade com uploads maiores" image='/Assets/image/fortao.png'/>
            <NitroCard titulo="Faça transmissões de aplicativos e jogos em HD" image='/Assets/image/onix.svg'/>
            </div>

            <div className="fileira">
            <NitroCard titulo="Aumente a empolgação e faça memes com emojis personalizados onde quiser" image='/Assets/image/emojis.svg'/>
            <NitroCard titulo="Desbloqueie vantagens para suas comunidades com 2 Impulsos de Servidor" image='/Assets/image/diamante.svg'/>
            </div>
            
        </div>
    )
}