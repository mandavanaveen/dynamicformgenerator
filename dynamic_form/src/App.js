import './App.css'
import Namefield from './components/Namefield'
import Numberfield from './components/Numberfield'
import Experience from './components/Experience'
import Education from './components/Education'
import Header from './components/Header'
import Socialmedia from './components/Socialmedia'
import SubmitButton from './components/Submit'

function App() {
  return (
    <div className="App flex flex-col w-4/5 pl-80">
      <Header />
      <Namefield />
      <Numberfield />
      <Education />
      <Experience />
      <Socialmedia />
      <SubmitButton />
    </div>
  )
}

export default App
