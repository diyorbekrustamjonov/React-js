function Book(props){
    return props.title ? (
        <div>
            <img src={props.img} alt={props.title} width="300"/>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
        </div>
    ) : null
}

export default Book