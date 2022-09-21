import "./CampoTexto.css"

const CampoTexto = (props) => {

    let valor = "Lucas Lopes"

    const aoDigitar = (e) => {
        valor = e.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>    
    )
}

export default CampoTexto