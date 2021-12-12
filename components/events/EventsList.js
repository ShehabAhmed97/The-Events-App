import Event from "./Event"
import classes from "./EventsList.module.css"
function EventsList(props) {
    const events = props.events
    return (
        <ul className={classes.list}>
            {events.map(event => {
                return (
                <Event 
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    image={event.image}
                    date={event.date}
                />
                )
                })}
        </ul>
    )
}
export default EventsList