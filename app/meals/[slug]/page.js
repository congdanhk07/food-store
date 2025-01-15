import classes from './page.module.css'
import Image from 'next/image'
import { getMealBySlug } from '@/lib/meals'
import { notFound } from 'next/navigation'

async function MealDetailPage({ params }) {
  const meal = await getMealBySlug(params.slug)
  if (!meal) {
    return notFound()
  }
  const normalizedInstruction = meal.instructions.replace(/\n/g, '<br>')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: normalizedInstruction }}
        ></p>
      </main>
    </>
  )
}

export default MealDetailPage
