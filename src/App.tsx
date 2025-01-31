import './App.css'
import HeaderBanner from './components/header/HeaderBanner'
import PokemonCard from './components/card/PokemonCard'
import Footer from './components/footer/Footer'

function App() {

  const titlePage = "Pokémon";

  const pokemonCardArr = [
    {
      name: "Clefable ex",
      hp: 260,
      isRare: true
    },
    {
      name: "Charmander",
      hp: 60,
      isRare: false
    },
    {
      name: "Houndour",
      hp: 50,
      isRare: false
    },
    {
      name: "Gengar ex",
      hp: 310,
      isRare: true
    },
    {
      name: "Iron Crown ex",
      hp: 220,
      isRare: true
    },
    {
      name: "Lapras",
      hp: 110,
      isRare: false
    }
  ]

  return (
    <>
      <HeaderBanner headerTitle={titlePage} />
      <main>
        <div className='card-wrap'>
          {pokemonCardArr.map((card, index) => (
            <PokemonCard
              key={index}
              name={card.name}
              hp={card.hp}
              isRare={card.isRare}
            />
          ))}
        </div>
      </main>
      <Footer />

    </>
  )
}

export default App
