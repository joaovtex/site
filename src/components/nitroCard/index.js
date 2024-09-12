import './index.scss';

export default function NitroCard(props) {
    return (
        <div className='comp-card'>
            <h2>{props.titulo}</h2>

            <img src={props.image}/>
        </div>
    )
}