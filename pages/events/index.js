import React from 'react'
import { getAllEvents } from "../../DUMMY_DATA.JS"
import EventsList from "../../components/events/EventsList"
import EventSearch from "../../components/events/EventSearch"
import {useRouter} from "next/router"

function AllEvents(){
    const allEvents = getAllEvents();
    
    const router = useRouter();
    function handleSearch(year,month) {
        const path = `/events/${year}/${month}`
        router.push(path);
    }
    return (
        <div>
            <EventSearch onSearch={handleSearch} />
            <EventsList events={allEvents}/>
        </div>
    )
}

export default AllEvents