import React from "react"
import { Search } from 'lucide-react';

export default function Filter() {

    function filter(FilterData) {
        const dayFilter = formData.get("eventDay")
        const distanceFilter = formData.get("eventDistance")
    }

    const days = ["Any day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const distances = ["Any", "5km", "10km", "15km", "20km", "25km", "50km", "100km"];


    return (
        <form className="navBar" action={filter}>
            <Search />
            <label htmlFor="dayFilter"></label>
            <select id="eventDay" name="eventDay" defaultValue="" required>
                {days.map(each => {
                    return (
                        <option value={each}>{each}</option>)
                })}
            </select>

            <label htmlFor="distanceFilter"></label>
            <select id="eventDistance" name="eventDistance" defaultValue="" required>
                {distances.map(each => {
                    return (
                        <option value={each}>{each}</option>)
                })}
            </select>
        </form>

    )
}