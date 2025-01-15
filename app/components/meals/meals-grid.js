import React from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meal-item'

function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals?.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </ul>
  )
}

export default MealsGrid
