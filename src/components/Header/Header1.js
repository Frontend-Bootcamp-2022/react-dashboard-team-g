import HeaderCSS from "./Header.module.css"
import IconBarCSS from "../icon-component/IconBar.module.css"

import { Edit, Settings } from "../icon-component/Icon"

export const Title = () => {
    return (
        <div>
            <h2 className={HeaderCSS.title}>Project Title goes here</h2>
        </div>
    )
}

const Header = () => {
    return (
        <div className={HeaderCSS.header}>
            <Title />
            <div className={IconBarCSS.bar}>
                <Edit />
                <Settings />
            </div>
        </div>
    )
}

export default Header;