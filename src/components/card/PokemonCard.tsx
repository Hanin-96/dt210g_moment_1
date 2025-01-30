import cardStyle from './PokemonCard.module.css'

interface PokemonCardProps {
  name: string,
  hp: number,
  isRare: boolean
}
function PokemonCard({ name, hp, isRare }: PokemonCardProps) {
  return (
    <>
      <article className={cardStyle.articleCard}>
        <h3 className={cardStyle.cardTitle}>{name}</h3>
        <p className={cardStyle.text}>{hp} hp</p>
        <p className={cardStyle.text}>{isRare === true ? `Kortet är "Rare"` : `Kortet är "Common"` }</p>
      </article>

    </>
  )
}

export default PokemonCard