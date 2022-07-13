import { useEffect, useState } from "react"
import MembersCSS from "./Members.module.css"
import IconBarCSS from "../icon-component/IconBar.module.css"

import { Plus } from "../icon-component/Icon"


const Member = (props) => {
    return (
        <img className={MembersCSS.img} src={props.url}></img>
    )
}

export const MembersBar = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5").then(res => res.json()).then(data => setUsers(data.results))
    },[])

    return (
        <div className={MembersCSS.container}>
            <div className={MembersCSS.title}>Members</div>
            <div className={MembersCSS.images}>
                <div className={MembersCSS.profiles}>
                    {users.map((profile, index) => (
                        <Member key={index} url={profile.picture.thumbnail}  />
                    ))}
                </div>
                <div className={IconBarCSS.plus}>
                    <Plus />
                </div>
            </div>
        </div>
    )
}