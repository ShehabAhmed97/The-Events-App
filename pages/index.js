import React from 'react'
import { getFeaturedEvents } from "../DUMMY_DATA.JS"
import EventsList from "../components/events/EventsList"

function HomePage(){
    const allEvents = getFeaturedEvents();
    return (
        <div>
            <EventsList events={allEvents}/>
        </div>
    )
}

export default HomePage