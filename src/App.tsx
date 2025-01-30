import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBanner from './components/header/HeaderBanner'
import PokemonCard from './components/card/PokemonCard'
import Footer from './components/footer/footer'

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
      <Footer />

    </>
  )
}

export default App
