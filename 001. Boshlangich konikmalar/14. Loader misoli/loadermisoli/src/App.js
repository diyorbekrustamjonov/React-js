import Book from "./Book"
import Loader from "./Loader"

function App(props){
  return props.isLoading ? (
    <Book 
      img="https://assets.asaxiy.uz/product/items/desktop/fae0b27c451c728867a567e8c1bb4e5320210213175916941826mckQuYdtH.jpg"
      title="Мукаммал дастурлаш 2: JavaScript"
      year="2021"
      price="49 000 сум"
    />    
  ) : <Loader />
}

export default App 