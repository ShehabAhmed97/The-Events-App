import classes from "./Event.module.css"
import Button from "../ui/Button"
import Arrow from "../icons/arrow-icon"
import AddressIcon from "../icons/address-icon"
import DateIcon from "../icons/date-icon"

function Event(props) {
    const date = new Date(props.date);
    const humanReadableDate = date.toLocaleDateString('en-US',{
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    const customLocation = props.location.replace(",", "\n")
    return (
        <li className={classes.item}>
            <img src={ "/" + props.image} alt={props.title}/>
            <div className={classes.content}>
                <div>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{customLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${props.id}`} >
                    <span>Explore event</span>
                    <span className={classes.icon}><Arrow /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
export default Event