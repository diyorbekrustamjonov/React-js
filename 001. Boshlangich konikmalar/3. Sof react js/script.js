



//Koplab elementlarni qoshib qilishda

const Book = (props) => {
    return React.createElement("div", {}, [
        React.createElement('h2', {},props.name),
        React.createElement("p", {}, props.year),
        React.createElement("p", {}, props.price)
    ])
}


const App = () => {
    //React bu yerda global object
    return React.createElement("div", {}, [
        React.createElement("h1", { id: "title", className: "paragraph"}, ["Hello worlds"]),
        React.createElement(Book),
        React.createElement(Book, {name: "JS for Beginnners", year: 2020, price: "50$"}),//Malumotlarni ozgartirib chiqarish
        React.createElement(Book, {name: "React for Beginnners", year: 2019, price: "60$"}),//Malumotlarni ozgartirib chiqarish
        React.createElement(Book, {name: "Vue for Beginnners", year: 2021, price: "70$"}),//Malumotlarni ozgartirib chiqarish
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))