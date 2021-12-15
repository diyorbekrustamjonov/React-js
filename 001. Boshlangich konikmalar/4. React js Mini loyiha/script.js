//props bu hususiyat
const Course = (props) => {
    return React.createElement("div", {}, [
        React.createElement("img", { src: `${props.url}`, width: 300, alt: `${props.courseName}` }),
        React.createElement("div", {}, [
            React.createElement("h2", {}, props.courseName),
            React.createElement("p", {}, props.year),
            React.createElement("p", {}, props.price)
        ]),


    ])
}
const App = () => {
    return React.createElement("h1", {}, [
        React.createElement(Course, {
            url: "https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1.png",
            courseName: "ReactJS for beginners",
            year: 2021,
            price: 50
        })
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))