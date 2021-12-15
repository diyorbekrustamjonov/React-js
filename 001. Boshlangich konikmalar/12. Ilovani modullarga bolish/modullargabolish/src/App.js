//Kerak li module ni import orqali chaqirib olamiz
//import { News } from "./News" //=> Qilmaganligimizni sababai export qilayotganimizda export default News qilganmiz
//default qilmaganimizda ishlamast edi
import News from "./News"

function App(){
    return(
      <div>
        <News img="https://storage.kun.uz/source/8/FjYhRTE3f4nHQYhPJf9lHqvhvqpDnOCz.jpg" title="Президент Тошкентдаги тирбандлик муаммосини ҳал қилиш чораси ҳақида гапирди" description="«Ғишткўприк» божхона постини кенгайтириш бўйича топшириқ берилди." dateTime="19:51 / 14.12.2021" />
        <News img="https://storage.kun.uz/source/8/FjYhRTE3f4nHQYhPJf9lHqvhvqpDnOCz.jpg" title="Президент Тошкентдаги тирбандлик муаммосини ҳал қилиш чораси ҳақида гапирди" description="«Ғишткўприк» божхона постини кенгайтириш бўйича топшириқ берилди." dateTime="19:51 / 14.12.2021" />
      </div>
    )
}
  
export default App