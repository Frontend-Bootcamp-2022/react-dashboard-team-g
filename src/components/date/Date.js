import DateCSS from "./Date.module.css"

const Date = (props) => {
    return (
        <div className={DateCSS.container}>
            <div className={DateCSS.title}>{props.status}</div>
            <div className={DateCSS.text}>{props.text}</div>
        </div>
    )
}

export default Date;