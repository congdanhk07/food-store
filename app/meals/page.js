import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '../components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

const Meals = async () => {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}
function MealsPage() {
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
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
