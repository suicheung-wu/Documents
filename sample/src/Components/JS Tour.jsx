const Tour = ( image, date, title, info, location, duration, cost ) => {
    return (
        <div className='card'>
            < className='card-img'>
                <img src={image} alt='' />
                <p>{date}</p>
            </div>
            <div className='card-content'>
                <h3>title</h3>
                <p>info</p>
                <ul></ul>
            </div>
    )
}