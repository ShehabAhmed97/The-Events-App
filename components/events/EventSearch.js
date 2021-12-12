import React from 'react'
import Button from "../ui/Button"
import classes from "./eventsSearch.module.css"
import { useRef } from "react"
function EventSearch(props){
    const yearInput = useRef()
    const monthInput = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const year = yearInput.current.value
        const month = monthInput.current.value
        props.onSearch(year, month);
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year"></label>
                    <select id="year" ref={yearInput}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month"></label>
                    <select id="month" ref={monthInput}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
            </div>
            <Button>Search</Button>
        </form>
    )
}

export default EventSearch