import InfoCSS from "./Info.module.css"

import Signal from "../signal/Signal"
import { LineVertical } from "../icon-component/Icon";
import Date from "../date/Date";

const Info = () => {
    return (
        <div className={InfoCSS.container}>
            <div>
                <Date status="Start date" text="12 Sep 2022"/>
            </div>
            <div className={InfoCSS.signalContainer}>
                <Signal number="14" name="Tasks"/>
                <LineVertical />
                <Signal number="95" name="Users"/>
            </div>
        </div>
    )
}

export default Info;