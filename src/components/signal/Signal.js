import SignalCSS from "./Signal.module.css"

const Signal = (props) => {
    return (
        <div className={SignalCSS.container}>
            <div className={SignalCSS.number}>{props.number}</div>
            <div className={SignalCSS.name}>{props.name}</div>
        </div>
    )
}

export default Signal;