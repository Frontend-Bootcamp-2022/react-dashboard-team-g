import MembersCSS from "./Members.module.css"

// const Member = () => {
//     return (
//         <img src="https://i.picsum.photos/id/137/200/200.jpg?hmac=qhNK8PzcRQJaCJlGEj1q5ceRIkKkfPmVuOwE5ZInXA8"></img>
//     )
// }

// const Members = Member.map((number) => {
//     return (
//         number * 5
//     )
// })

export const MembersBar = () => {
    return (
        <div className={MembersCSS.container}>
            <div className={MembersCSS.title}>Members</div>
            <div className={MembersCSS.profiles}>
                <div className={MembersCSS.img}></div>
                <div className={MembersCSS.img}></div>
                <div className={MembersCSS.img}></div>
                {/* {Member.map((profile) => (
                    <div className={MembersCSS.img}>{profile}</div>
                ))} */}
            </div>
        </div>
    )
}