import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props){
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let  weekDate= props.date.getDate();
    let month= months[props.date.getMonth()];
    let day = days[props.date.getDay()];
    let hours =props.dates.getHours();
    let minutes = props.date.getMinutes();
    if (hours < 10) {
        hours =`0${hours}`;
    }
    if (minutes < 10) {
        minutes =`0${minutes}`;
    }
    if (weekDate < 10) {
        weekDate = `0${weekDate}`;
    }
    return(
        <div>
            <div>
                {day} {weekDate} {month}
            </div>
            {hours}:{minutes}
        </div>
    );
}