import { useState } from 'react';
import './index.scss'

export default function Calculadora() {
    const[valor1, setValor1] = useState(0)
    const[valor2, setValor2] = useState(0)
    const[total, setTotal] = useState(0)

    function somar() {
        var r = Number(valor1) + Number(valor2)
        setTotal(r)
    }

    return (
        <div className='pagina-calculadora'>
            <h1>Calculadora</h1>
            <div className='calcForm'>
                <div>
                    <label>Número 1: </label>
                    <input type='text' value={valor1} onChange={e => setValor1(e.target.value)}></input>
                </div>
                <div>
                    <label>Número 2: </label>
                    <input type='text' value={valor2} onChange={e => setValor2(e.target.value)}></input>
                </div>

                <div>
                    <label>{total}</label>
                </div>

                <button onClick={somar}>
                    Somar
                </button>
            </div>
        </div>


    );

}