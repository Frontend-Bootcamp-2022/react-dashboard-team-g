import StatusCSS from "./Status.module.css"

import { StatusDot } from "../icon-component/Icon"

const Status = () => {
    return (
        <div className={StatusCSS.container}>
            <StatusDot />
            <p className={StatusCSS.name}>Active</p>
        </div>
    )
}

export default Status;