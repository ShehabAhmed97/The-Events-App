import React from 'react'
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
import {getFilteredEvents} from "../../DUMMY_DATA.JS"
import EventsList from "../../components/events/EventsList"
import {getAllEvents} from "../../DUMMY_DATA.JS"

FilteredEvents.getInitialProps = async (ctx) => {
    const res = await ctx.query
    return { query: res }
  }

function FilteredEvents({query}){
    console.log(query)
    const filteredEvents = getFilteredEvents({year: Number(query.slug[0]), month: Number(query.slug[1])})
        return (
            <div>
                <h1>Filtered Events</h1>
                <h1>{}</h1>
                <EventsList events={filteredEvents} />
            </div>
        )    

}

export default FilteredEvents