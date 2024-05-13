import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Section from '../../Components/Section'
import Galeria from '../../Components/Galeria'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])
  if (!game) {
    return <h3>Está Carregando...</h3>
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idioma:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
          <br />
        </p>
      </Section>
      <Galeria
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
