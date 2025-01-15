import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // demonstrate loading
  //   throw new Error(`Something went wrong`)
  const stmt = db.prepare('SELECT * FROM meals')
  return stmt.all()
}

export function getMealBySlug(slug) {
  const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?')
  return stmt.get(slug)
}

export async function getMealsByCreator(creator) {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // demonstrate loading
  const stmt = db.prepare('SELECT * FROM meals WHERE creator = ?')
  return stmt.all(creator)
}
