import { useState } from 'react';
import './index.scss'

export default function Contador() {

    const[contador, setContador] = useState(1)

    function adicionar() {
        setContador(contador + 1);
    }

    return (

        <div className='pagina-contador'>
            <h1>
                Variáveis de estado
                <div className='contador'>
                    <h2>Contador</h2>
                    <span>{contador}</span>
                    <button onClick={adicionar}>Adicionar</button>
                </div>
            </h1>
        </div>

    );

}