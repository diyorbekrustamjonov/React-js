const News = (props) => {
    return (
      <div>
        <img src={props.img} alt={props.title} width="300px" />
        <h1>
          {(props.title) ? <span>{props.title}</span> : "404 news title"}
        </h1>
        <p>Time <span>{props.dateTime}</span></p>
      </div>
    )
}

export default News