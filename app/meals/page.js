import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '../components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function MealsPage() {
  const meals = await getMeals()
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Share your favorite recipes with the world! Create your own recipes,
          and share them with others.
        </p>
        <Link href='/meals/share'>Share yout favorite recipe</Link>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}

export default MealsPage
