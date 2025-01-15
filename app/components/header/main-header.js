import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from '../nav-link/nav-link'
import classes from './main-header.module.css'
function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image
          priority
          width={1024}
          height={1024}
          src={logoImg.src}
          alt='A plate with food on it'
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
