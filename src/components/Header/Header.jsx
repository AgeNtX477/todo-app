import './Header.css'
import mortylog from '../../images/morty.svg'
import riklog from '../../images/rik.svg'

function Header () {
  return (
    <header className='header'>
      <img className='header__logo' src={mortylog} alt='headerlogo'></img>
      <h1 className='header__title'>TODO LIST</h1>
      <img className='header__logo' src={riklog} alt='headerlogo'></img>
    </header>
  )
}

export default Header
