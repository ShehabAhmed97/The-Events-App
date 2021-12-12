function EventDetails(props) {
    return (
        <div>
            <img src={"/" + props.image} />
            <h1>{props.title}</h1>
            <p>{props.location}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default EventDetails