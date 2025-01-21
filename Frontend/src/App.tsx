import Navbar from './components/Navbar'
import { faker } from "@faker-js/faker"
import Words from './components/Words'


const words = faker.word.words(20)


export default function App() {
  return (
   <div className= " min-h-screen min-w-screen bg-dark-blue">
  <Navbar />   
  <Words word={words} />


   </div>
  )
}