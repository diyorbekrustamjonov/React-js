import News from "./News"
import Content from "./Content"

function App(){
  const description = "The Red Bull driver said a shared moment after the title was decided at the controversial Abu Dhabi Grand Prix returned their relationship to normal."
  return (
    <div>
      <News 
        img="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/EE0F/production/_122234906_gettyimages-1358584020.jpg"
        title="Max Verstappen on Lewis Hamilton, Abu Dhabi controversy and what happens next"
        description=""
        year="2021"
      />
      <Content description={description} />
    </div>

  )
}
export default App