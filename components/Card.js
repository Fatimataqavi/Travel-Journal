import React from "react"
export default function Card(props){
    return(
        <section className="card-container">
            <img src={props.imageUrl} />
            <div className="travel-details">
                <div className="location">
                    <i className=" fas fa-map-marker-alt"></i>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </section>
    )
}