import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // demonstrate loading
  //   throw new Error(`Something went wrong`)
  const stmt = db.prepare('SELECT * FROM meals')
  return stmt.all()
}

export async function getMealById(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // demonstrate loading
  const stmt = db.prepare('SELECT * FROM meals WHERE id = ?')
  return stmt.get(id)
}

export async function getMealsByCreator(creator) {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // demonstrate loading
  const stmt = db.prepare('SELECT * FROM meals WHERE creator = ?')
  return stmt.all(creator)
}
