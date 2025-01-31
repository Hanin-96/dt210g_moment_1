import cardStyle from './PokemonCard.module.css'

interface PokemonCardProps {
  name: string,
  hp: number,
  isRare: boolean
}
function PokemonCard({ name, hp, isRare }: PokemonCardProps) {
  const rareCard: object = {
    color: "yellow"
  }
  return (
    <>
      <article className={cardStyle.articleCard}>
        <h3>{name}</h3>
        <p className={cardStyle.text}>{hp} hp</p>
        <p className={cardStyle.text}>Kortet är <span style={isRare ? rareCard : {color :"lightGreen"}}>{isRare === true ?  "Rare" : "Common"}</span></p>
      </article>

    </>
  )
}

export default PokemonCard