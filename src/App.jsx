import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'

function App() {
  return (
    <div >
      <h1 className="text-3xl font-bold">
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
      </h1>
    </div>
  )
}

export default App
