import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory()

  const handleAbout = () => {
    history.push('/about')
  }

  const handleProjects = () => {
    history.push('/projects')
  }

  const handleContact = () => {
    history.push('/contact')
  }

  return (
    <main>
      <div>Portfolio em construção</div>
      <button type="button" onClick={ handleAbout }>Sobre mim</button>
      <button type="button" onClick={ handleProjects }>Projetos</button>
      <button type="button" onClick={ handleContact }>Contato</button>
    </main>
  )
}

export default HomePage;
