import CardCSS from "./Card.module.css"

import Header from "../header/Header"
import Status from "../status/Status"
import Info from "../info/Info"
import { MembersBar } from "../members/Members"
import { Progress } from "../progress/Progress"

const CardTable = () => {
    const titles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        titles.map((card, index ) =>  {
            return (
                <div key={index} className={CardCSS.card}>
                    <Header />
                    <Status status="active" />
                    <Info  />
                    <MembersBar />
                    <Progress percentage={13} />
                </div>
            )
        })
       )
}


export default CardTable