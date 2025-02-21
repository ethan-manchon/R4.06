import Team from './components/Team/Team'
import members from './data/data.js'
import './App.css'

function App() {

  let title = 'Our Team'
  let description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'

  return (
    <Team title={title} description={description} members={members}/>
  )
}

export default App
