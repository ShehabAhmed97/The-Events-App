import { useRouter } from "next/router"
import { Fragment } from "react";
import { getEventById } from "../../DUMMY_DATA.JS"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventSummary from "../../components/event-detail/event-summary"

function SelectedEvent(){
    const router = useRouter();
    const eventId = router.query.id;
    let event = getEventById(eventId)
    if(event !== undefined) {
            return (
                <Fragment>
                    <EventSummary title={event.title} />
                    <EventLogistics 
                        address={event.location} 
                        date={event.date}
                        image={event.image}
                        imageAlt={event.title}
                    />
                    <EventContent>
                        <p>{event.description}</p>
                    </EventContent>
                </Fragment>
            )
    }else{
        return null
    }
}

export default SelectedEvent