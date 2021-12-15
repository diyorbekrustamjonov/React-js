function News(props){
    return (
        <div>
            <img src={props.img} alt={props.title} width="300"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.year}</p>
        </div>
    )
}
export default News