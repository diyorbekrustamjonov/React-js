import Course from './Course'

function App(){
    return (
        <div>
            <Course 
                img="https://bestprogrammer.ru/wp-content/uploads/2021/01/Luchshie-proekty-JavaScript-dlya-nachinayushhih.jpg"
                title="JavaScript for beginners"
                year="2021"
                price="50$"
            />

            <Course 
                img="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200309202057/How-To-Learn-ReactJS-A-Complete-Guide-For-Beginners.jpg"
                title="React JS for beginners"
                year="2021"
                price="70$"
            />

            <Course 
                img="https://redwerk.com/wp-content/uploads/2019/11/cover_Vue.png" 
                title="Vue JS for beginners"
                year="2021"
                price="60$"
            />

        </div>
    )
}

export default App