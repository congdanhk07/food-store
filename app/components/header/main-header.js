import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
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
            <Link href='/meals'>Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
