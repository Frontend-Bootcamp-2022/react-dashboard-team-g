import StatusCSS from "./Status.module.css"

const Status = (props) => {
    let color;
    let status;
    switch (props.status) {
        case "active":
            color = "#00DB99";
            status = "Active";
            break;
        case "inactive":
            color = "#FF285C"; 
            status = "Inactive";
            break;
        case "hold":
            color = "#F0BB00";
            status = "On hold";
            break;
      };

    return (
        <div className={StatusCSS.container}>
            <div className={StatusCSS.status} style={{background: `${color}`}} />
            <p style={{color: `${color}`}} className={StatusCSS.name}>{status}</p>
        </div>
    )
}

export default Status;