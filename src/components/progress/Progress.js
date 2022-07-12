import ProgressCSS from "./Progress.module.css"

const ProgressBar = () => {
    return (
        <div className={ProgressCSS.empty}>
            <div className={ProgressCSS.filled}>
            </div>
        </div>
    )
}

export const Progress = () => {
    return (
        <div className={ProgressCSS.container}>
            <div className={ProgressCSS.header}>
                <div className={ProgressCSS.title}>Progress</div>
                <div className={ProgressCSS.percent}>67%</div>
            </div>
            <ProgressBar />
        </div>
    )
}