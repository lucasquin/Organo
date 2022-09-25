import "./Times.css"

const Times = (props) => {
    return (
        <section style={{backgroundColor: props.corSecundaria}} className="times">
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Times