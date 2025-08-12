import React from "react";
import { tours } from "./data";
const Tours = () => {
    return (
        <article className='tours' id='tours'>
            <h2>
                featured <span className='text-secondary'></span>
            </h2>
            <div className='cards'>
                tours.map((tour) => (
                    <Tour key={tour.id} {... tour} />
                    // <tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duration} cost={tour.cost} />
                ))
            </div>
        </article>
    );
}