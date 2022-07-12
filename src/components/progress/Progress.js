import ProgressCSS from "./Progress.module.css"

const ProgressBar = (props) => {
    return (
        <div className={ProgressCSS.empty}>
            <div style={{width: `${props.percentage}%` }}  className={ProgressCSS.filled}>
            </div>
        </div>
    )
}

export const Progress = (props) => {
    return (
        <div className={ProgressCSS.container}>
            <div className={ProgressCSS.header}>
                <div className={ProgressCSS.title}>Progress</div>
                <div className={ProgressCSS.percent}>{props.percentage}%</div>
            </div>
            <ProgressBar percentage={props.percentage} />
        </div>
    )
}