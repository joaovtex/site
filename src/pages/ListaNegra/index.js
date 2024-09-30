import axios from 'axios'

import { useState } from 'react'
import './index.scss'


export default function ListaNegra() {

    const [nome, setNome] = useState('');
    const [motivo, setMotivo] = useState('');
    const [vinganca, setVinganca] = useState('');
    const [notaOdio, setNotaOdio] = useState(0);
    const [perdoado, setPerdoado] = useState(false);

    const [lista, setLista] = useState([]);


    async function salvar() {
        let body = {
            'nome': nome,
            'motivo': motivo,
            'vinganca': vinganca,
            'notaOdio': notaOdio,
            'perdoado': perdoado
        }

        let resp = await axios.post('http://localhost:3010/listanegra', body);
        alert('Novo registro inserido: ' + resp.data.novoId);
    }


    async function buscar() {
        let resp = await axios.get('http://localhost:3010/listanegra');
        setLista(resp.data);
    }

    return (
        <div className='pagina-lista-negra'>
            <h1> Lista Negra </h1>

            <h1>Inserir</h1>
            <div className='form'>
                <div>
                    <label>Nome</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Motivo</label>
                    <input type='text' value={motivo} onChange={e => setMotivo(e.target.value)}  />
                </div>
                <div>
                    <label>Vingança</label>
                    <input type='date' value={vinganca} onChange={e => setVinganca(e.target.value)} />
                </div>
                <div>
                    <label>Nota do Ódio</label>
                    <input type='text' value={notaOdio} onChange={e => setNotaOdio(e.target.value)}  />
                </div>
                <div>
                    <label>Perdoado</label>
                    <input type='checkbox' checked={perdoado} onChange={e => setPerdoado(e.target.checked)}  />
                </div>
                <div>
                    <button onClick={salvar}> Salvar </button>
                </div>
            </div>

            <hr />
            <h1> Itens da Lista Negra </h1>
            <button onClick={buscar}> Buscar </button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Motivo</th>
                        <th>Vingança</th>
                        <th>Nota Ódio</th>
                        <th>Perdoado</th>
                    </tr>
                </thead>

                <tbody>

                    {lista.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.motivo}</td>
                            <td>{ new Date(item.vinganca).toLocaleDateString('ar-EG')}</td>
                            <td>{item.notaOdio}</td>
                            <td>{item.perdoado ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                        
                </tbody>
            </table>


        </div>
    )
}