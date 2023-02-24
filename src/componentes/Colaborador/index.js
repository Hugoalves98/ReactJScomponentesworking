import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
    <div className="colaborador">
        {/* <div className="deletar" onClick={aoDeletar}>deletar</div> */}
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)}/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? 
                <AiFillHeart size={25} onClick={favoritar} /> : 
                <AiOutlineHeart size={25} onClick={favoritar}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador