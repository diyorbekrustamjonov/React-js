function Course(props){
    //ternary operator orqali malumotlar kelish kelmasligini tekshirib olyabmiz
    return props.title ? (
        <div>
            <img src={props.img} alt={props.title} width="300"/>
            <h1>{props.title}</h1>
            <p>{props.year}</p>
            <p>{props.price}</p>
        </div>
    ) : null
}

export default Course