import Colaborador from "../Colaborador"
import "./Times.css"

const Times = (props) => {
    return ((props.colaboradores.length > 0) &&
        
        <section style={{backgroundColor: props.corSecundaria}} className="times">
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map( colaborador => <Colaborador   corDeFundo={props.corPrimaria}
                                                                    key={colaborador.nome}
                                                                    nome={colaborador.nome}
                                                                    cargo={colaborador.cargo}
                                                                    imagem={colaborador.imagem}/> )}
            </div>
        </section>        
    )
}

export default Times