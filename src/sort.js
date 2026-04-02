/**
 * Сортирует героев по убыванию здоровья
 * @param {Array<{name: string, health: number}>} heroes
 * @returns {Array<{name: string, health: number}>}
 */
export function sortHeroesByHealth(heroes) {
  return [...heroes].sort((a, b) => b.health - a.health);
}